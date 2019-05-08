import React, { Component } from "react";
import { connect } from 'react-redux';
import BooksList from "../Books/BooksList";

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
					<BooksList 
						books={this.props.books.booksArray}  
						addItem={this.props.addItem}
						cart={this.props.cart}
					/>
      </div>
      
		);
	}
} 


const mapStateToProps = function(store) {
	return {
		books: store.booksReducer,
		cart: store.cart,
	};
};
const mapDispatchToProps = dispatch => ({
  addItem: (item) => {
		dispatch({type: 'ADD_ITEM', payload: item})
	},
	removeItem: (id) => {
		dispatch({type: 'REMOVE_Item', payload: id})
	}
})

export default connect(
  mapStateToProps,
	mapDispatchToProps
)(Home);

