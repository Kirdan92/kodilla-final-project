import React, { Component } from "react";
import { connect } from 'react-redux';
import { getBooks, addBook } from '../actions/actionsBooks';
import BooksList from "./Books/BooksList";


class Home extends Component {
  constructor(props) {
		super(props);
	}

  componentDidMount() {
		this.props.getBooks();
	}

	render() {
    console.log(this.props)
		return(
      
			<div>
          <div className="sidebar">Sidebar</div>
          <BooksList books={this.props.books.books}  />
      </div>
      
		);
	}
} 


const mapStateToProps = function(store) {
	return {
		books : store.booksReducer,
	};
};
const mapDispatchToProps = dispatch => ({
  getBooks: () => dispatch(getBooks())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

