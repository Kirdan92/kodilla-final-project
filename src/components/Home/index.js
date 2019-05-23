import React, { Component } from "react";
import { connect } from 'react-redux';
import ProductsList from "../Products/ProductsList";
import Filter from "../Sidebar/Sidebar";
import { searchProducts } from "../../actions/actionsProducts";

require('./home.css');

class Home extends Component {
  constructor(props) {
		super(props);

		this.state = { 
			sort: '',
			cover: '',
			type: '',
			search: '',
			products: [], 
			filteredProducts: []
		};
		this.handleSearchProducts = this.handleSearchProducts.bind(this);
		this.handlePriceSort = this.handlePriceSort.bind(this);
		this.handleCoverFilter = this.handleCoverFilter.bind(this);
		this.handleTypeFilter = this.handleTypeFilter.bind(this);
	}



	componentDidMount() {	
			this.setState({
				products: this.props.products.products,
			})
			this.listProducts();
  	}

	

	listProducts() {
		this.setState(state => {
			if (state.sort !== '') {
				state.products.sort((a, b) =>
				  (state.sort === 'lowest'
					? ((a.price > b.price) ? 1 : -1)
					: ((a.price < b.price) ? 1 : -1)));
			} else {
				state.products.sort((a, b) => (a.id > b.id) ? 1 : -1);
			}
			  //deklaracja zmiennej z state products - nadpisywanie jednej zmiennej 
			let tempList = state.products;

			if (state.search !== '') {
				tempList = state.products.filter(product =>  product.title.toLowerCase().includes(state.search.toLowerCase()));
				if (state.cover !== '') {
					tempList = tempList.filter(a => a.cover === state.cover) ;
				}
				if (state.type !== '') {
					tempList = tempList.filter(a => a.type.toLowerCase() === state.type.toLowerCase()) ;
				}
			} else {
				if (state.cover !== '') {
					tempList = state.products.filter(a => a.cover === state.cover) ;
				}
				if (state.type !== '') {
					tempList = state.products.filter(a => a.type.toLowerCase() === state.type.toLowerCase()) ;
				}
			}

			return { filteredProducts: tempList };
		})
	}

	handleSearchProducts(event) {
		this.setState({search: event.target.value});
		this.listProducts();
	}

  	handlePriceSort(event) {
		this.setState({sort: event.target.value});
		this.listProducts();
	}

	handleCoverFilter(event) {
		this.setState({cover: event.target.value});
		this.listProducts();
	}

	handleTypeFilter(event) {
		this.setState({type: event.target.value});
		this.listProducts();
	}

	render() {
		console.log("Search: " + JSON.stringify(this.state.search));
		return(   
			<div className="homepage-container">
				<div className="sidebar">
					<Filter 
						cover={this.state.cover} 
						type={this.state.type} 
						sort={this.state.sort} 
						search={this.state.search} 
						handlePriceSort={this.handlePriceSort} 
						handleCoverFilter={this.handleCoverFilter} 
						handleTypeFilter={this.handleTypeFilter} 
						handleSearchProducts={this.handleSearchProducts}
					/>
		
				</div>
				<ProductsList 
					products={this.state.filteredProducts}  
					addToCart={this.props.addToCart}
					removeFromCart={this.props.removeFromCart}
					cart={this.props.cart}
				/>
      		</div>
      
		);
	}
} 


const mapStateToProps = function(store) {
	return {
		books: store.booksReducer,
		products: store.productsReducer,
		cart: store.cart,
		
	};
};
const mapDispatchToProps = dispatch => ({
  addToCart: (item) => {
		dispatch({type: 'ADD_ITEM', payload: item})
	},
	removeFromCart: (item) => {
		dispatch({type: 'REMOVE_ITEM', payload: item})
	}
})

export default connect(
  mapStateToProps,
	mapDispatchToProps
)(Home);