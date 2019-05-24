import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

require('./SummaryPage.css');

function sort (items) {
    return items.sort((a, b) => a.id - b.id)
  };

 class SummaryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      finalPrice: 0,
      cartProducts: this.props.cart,
      productsAmount: this.props.cart.length,
      checkoutData: this.props.checkout[0]
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
        }
        partialPrice = Math.round(partialPrice * 100) / 100;
      }
      return {finalPrice: partialPrice}
    })
    return {finalPrice: partialPrice}
  }

  render() {
        const  {finalPrice, checkoutData} = this.state;
    return (
        <Container className="summary-container ">
        {
          this.state.productsAmount > 0 ? 
        <Col>
            <h3 className="checkout-header center-align">Podsumowanie zamówienia</h3>
                    <Table striped responsive>
                        <thead className="dark-tableHead">
                            <tr>
                                <th colSpan="6" className="center-align">Kupione przedmioty</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Nazwa</td>
                                <td>Ilość</td>
                                <td>Cena</td>
                                <td colSpan="3"></td>

                            </tr>
                        {
                            sort(this.props.cart).map(cartItem => 
                            <tr key={cartItem.id}>
                                <td>{ cartItem.title }</td>
                                <td>{ cartItem.quantity }</td>
                                <td>{ cartItem.price }</td>
                            </tr>)
                        }
                            </tbody>
                            <thead className="dark-tableHead">
                                <tr>
                                    <th colSpan="6" className="center-align">Dane do wysyłki: </th>
                                </tr>                  
                            </thead>
                            <tbody>
                            <tr>
                                <td>Imię</td>
                                <td>Nazwisko</td>
                                <td>emial</td>
                                <td>Ulica</td>
                                <td>Numer Miekszania</td>
                            </tr>
                            <tr>
                                <td>{ checkoutData.firstName }</td>
                                <td>{ checkoutData.lastName }</td>
                                <td>{ checkoutData.emailInput }</td>
                                <td>{ checkoutData.streetInput }</td>
                                <td>{ checkoutData.flatNum }</td>
                            </tr>
                            <tr>
                                <td>Razem do zapłaty:</td>
                                <td colSpan="5"> {finalPrice}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>        
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


export default connect(mapStateToProps)(SummaryPage);