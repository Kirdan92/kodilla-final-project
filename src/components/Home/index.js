import React, { Component } from "react";
import { connect } from 'react-redux';
import ProductsList from "../Products/ProductsList";
import Filter from "../Sidebar/Filter";

require('./home.css');

class Home extends Component {
  constructor(props) {
		super(props);

		this.state = { 
			sort: '',
			cover: '',
			products: [], 
			filteredProducts: []
		};
		this.handlePriceSort = this.handlePriceSort.bind(this);
		this.handleCoverFilter = this.handleCoverFilter.bind(this);
	}

	componentWillMount() {	
			this.setState({
				products: this.props.products.products,
			})
			this.listProducts();
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
			  if (state.cover !== '') {
				return { filteredProducts: state.products.filter(a => a.cover.indexOf(state.cover) >= 0) };
			  }
			  return { filteredProducts: state.products };
			})
	}

  handlePriceSort(event) {
		this.setState({sort: event.target.value});
		this.listProducts();
	}

	handleCoverFilter(event) {
		this.setState({cover: event.target.value});
		this.listProducts();
	}

	render() {
		console.log(this.props)
		console.log("Produkty: " + this.state.products)
		console.log("filteredProducts: " + this.state.filteredProducts)
		console.log("Cover 22 2: " + JSON.stringify(this.state.cover));
		console.log("Sort 22 2: " + JSON.stringify(this.state.sort));
		return(   
			<div className="homepage-container">
          		<div className="sidebar">
					<Filter cover={this.state.cover} sort={this.state.sort} handlePriceSort={this.handlePriceSort} handleCoverFilter={this.handleCoverFilter}/>
					
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

