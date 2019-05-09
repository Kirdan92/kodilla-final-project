import React, { Component } from "react";
import { connect } from 'react-redux';
import BooksList from "../Books/BooksList";
import ProductsList from "../Products/ProductsList";

require('./home.css');

class Home extends Component {
  constructor(props) {
		super(props);
	}

  componentDidMount() {

	}

	render() {
    console.log(this.props)
		return(   
			<div className="homepage-container">
          <div className="sidebar">Sidebar</div>
					<ProductsList 
						products={this.props.products.products}  
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

