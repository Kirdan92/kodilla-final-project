import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProduct, GET_PRODUCT } from '../../actions/actionsProducts';
import { Container, Row, Col, Button } from 'reactstrap';


class ProductDetails extends Component {
	constructor(props) {
        super(props);
        
        this.state = { 
            product: {}
		};
	}

	componentDidMount() {
        this.props.getProduct(this.props.match.params.id);
	}

	render() {
        const { image, title} = this.props.selectedProduct;
        const cartItem = this.props.cart.filter(cartItem => cartItem.id === this.props.selectedProduct.id)[0]
        console.log(JSON.stringify(this.props.match.params.id))
		return (
            <Container>
                <Row className="">
                    <div className="col-sm-3 product-image-container">
                        <img className="product-photo" src={image} alt="" />
                    </div>
                    <div className="col-sm-6 product-details-container">
                        <h3 className="product-details-title">{title}</h3>
                    </div>
                    <div className="col-sm-3 product-purchase-container">
                    <Button color="info" onClick={() => this.props.addToCart(this.props.selectedProduct)}>DODAJ DO KOSZYKA({(cartItem && cartItem.quantity) || 0})</Button >
                        {
                            cartItem ? <Button color="danger" onClick={() => this.props.removeFromCart(cartItem)}>USUŃ 1</Button >	: null
                        }
                    </div>
                </Row>
            </Container>

		)
	}
}

const mapStateToProps = function(store) {
	return {
        selectedProduct: store.productsReducer.selectedProduct,
        cart: store.cart,
        products: store.productsReducer,
	};
};

const mapDispatchToProps = dispatch => ({
    addToCart: (item) => {
          dispatch({type: 'ADD_ITEM', payload: item})
      },
      removeFromCart: (item) => {
          dispatch({type: 'REMOVE_ITEM', payload: item})
      },
      getProduct: (id) => {
          dispatch({type: GET_PRODUCT, payload: id})
      }
  })
  


export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
