import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Table, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

require('./Cart.css');

function sort (items) {
  return items.sort((a, b) => a.id - b.id)
};

 class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      finalPrice: 0,
      cartProducts: this.props.cart,
      productsAmount: this.props.cart.length
    };
    
    this.summFinalPrice = this.summFinalPrice.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleRremoveAll = this.handleRremoveAll.bind(this);
  }

  componentDidMount() {	
    this.setState({
      cartProducts: this.props.cart,
    })
    this.summFinalPrice();
  }


  handleAdd(cartItem) {
    this.props.addToCart(cartItem);
  }

  handleRemove(cartItem) {
    this.props.removeFromCart(cartItem);
    this.summFinalPrice();
  }

  handleRremoveAll(cartItem) {
    this.props.removeAllFromCart(cartItem);
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
    
  }

  render() {
    return (
      <Container className="cart-container">
        {
          this.state.productsAmount > 0 ? 
          <Col>
            <h3 className="cart-header">Zawartość koszyka</h3>
            <Table striped responsive>
            <thead className="dark-tableHead">
            <tr>
              <th></th>
              <th>Nazwa</th>
              <th>Ilość</th>
              <th>Cena (1 szt)</th>
              <th colSpan="3">Akcje</th>
            </tr>
            </thead>
            <tbody>
              {
                sort(this.props.cart).map(cartItem => <tr key={cartItem.id}>
                  <td><img  className="cart-productImage" src={ cartItem.image } alt={cartItem.title}/></td>    
                  
                    <td className="cart-productTitle">
                      <Link className="product-link" to={'/product/' + cartItem.id}>	{ cartItem.title }</Link>
                    </td>
                  
                  <td>{ cartItem.quantity }</td>
                  <td>{ cartItem.price }</td>
                  <td>
                    <Button className="btn-cart" color="success" title="Dodaj" onClick={() => this.handleAdd(cartItem)}>+</Button>
                  </td>
                  <td>
                    <Button className="btn-cart" color="danger" title="Usuń" onClick={() => this.handleRemove(cartItem)}>-</Button>
                  </td>
                  <td>
                    <Button outline color="danger" title="Usuń wszystkie"  onClick={() => this.handleRremoveAll(cartItem)}>Usuń wszsytkie</Button>
                  </td>
                </tr>)
              }
                <tr>
                  <td colSpan="7" className="center-align dark-tableHead">
                    Do zapłaty: {this.state.finalPrice} zł
                  </td>
                </tr>
            </tbody>
          </Table>
          <Row>
            <Col>
              <Button color="info" onClick={() => this.summFinalPrice()}>Przelicz</Button>
            </Col>
            <Col className="checkout-col">            
              <Link to='/checkout'>
                <Button color="primary" onClick={() => this.summFinalPrice()}>Do kasy</Button>
              </Link>
            </Col>
          </Row>
          
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
	};
};

const mapDispatchToProps = function(dispatch) {
	return {
		addToCart: (item) => {
      dispatch({ type: "ADD_ITEM", payload: item})
    },
    removeFromCart: (item) => {
      dispatch({ type: "REMOVE_ITEM", payload: item}) 
    },
    removeAllFromCart: (item) => {
      dispatch({ type: "REMOVE_ALL", payload: item})
    }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);