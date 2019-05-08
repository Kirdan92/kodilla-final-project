import React, { Component } from 'react';
import Router from './Router';
import { Header } from './components/Header';
import { Footer } from "./components/Footer";
import {cartItemsQuantity} from './components/Cart'

import { connect } from 'react-redux';

class App extends Component {
    constructor(props) {
		super(props);
	}
    render() {
        return (
        <div>
            <Header cart={cartItemsQuantity(this.props.cart)} />
            <Router />
            <Footer />
        </div>
            
        );
    }
}




const mapStateToProps = function(store) {
	return {
		cart: store.cart,
	};
};


export default connect(
    mapStateToProps,
  )(App);
  
  