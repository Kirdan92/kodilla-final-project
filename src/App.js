import React, { Component } from 'react';
import Router from './Router';
import  Header  from './components/Header';
import { Footer } from "./components/Footer";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'



import { connect } from 'react-redux';

library.add(faShoppingCart)

class App extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
		super(props);
	}
    render() {
        return (
        <div>
            <Header cart={this.props.cart} />
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
  
  