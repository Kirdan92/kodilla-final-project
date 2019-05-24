import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col} from 'reactstrap';
import { Link } from 'react-router-dom';
import CheckoutForm from "./CheckoutForm";

require('./Checkout.css');

 class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      finalPrice: 0,
      cartProducts: this.props.cart,
      productsAmount: this.props.cart.length
    };
    
    this.summFinalPrice = this.summFinalPrice.bind(this);

  }

  componentDidMount() {	
    this.setState({
      cartProducts: this.props.cart,
    })
    this.summFinalPrice();
  }

  summFinalPrice(){
    let partialPrice = 0;
    this.setState(state => {
      if(this.props.cart.length > 0) {
        for(let i = 0; i < this.props.cart.length; i++) {
          partialPrice += this.props.cart[i].price * this.props.cart[i].quantity
          console.log(partialPrice);
        }
        partialPrice = Math.round(partialPrice * 100) / 100;
      }
      return {finalPrice: partialPrice}
    })
    return {finalPrice: partialPrice}
  }

  render() {
    return (
        <Container className="checkout-container">
        {
          this.state.productsAmount > 0 ? 
        <Row className="center-justify">
            <Col>
                <h3 className="checkout-header center-align">Dane do wysyłki</h3>
                <CheckoutForm checkout={this.props.checkout} makeOrder={this.props.makeOrder} />
            </Col>   
        </Row>
     
	      : 
        <Row>
          <Col className="center-align middle-posiiton">
              <h3 className="emptyCart-title">Twój koszyk jest pusty</h3>
              <Link to='/' >
                <h3 className="emptyCart-link-text">Wróc do strony głownej</h3>
              </Link>
          </Col>
        </Row>


        }
        

      </Container>
    )
  }
}


const mapStateToProps = function(store) {
	return {
		cart: store.cart,
		checkout: store.checkout,
	};
};

const mapDispatchToProps = function(dispatch) {
    return {
		makeOrder: (order) => {
            dispatch({ type: "MAKE_ORDER", payload: order})
          },
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);