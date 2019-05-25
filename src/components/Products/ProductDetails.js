import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GET_PRODUCT } from '../../actions/actionsProducts';
import { Container, Row, Button, Table } from 'reactstrap';

require('./products.css');

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
        const { image, title, authors, type, cover, amount, numPages, sale, price, oldPrice} = this.props.selectedProduct;
        const cartItem = this.props.cart.find(cartItem => cartItem.id === this.props.selectedProduct.id)
        console.log()
		return (
            <Container className="productDetails-wrapper">
                <Row className="center-justify productDetails-row">
                    <div className="col-sm-12 col-md-6 col-lg-3 product-image-container">
                        <div className="photo-wrapper">
                            {
                                sale ? 
                                <div className="prodDetails-sale-marker">
                                    <h4>Promocja</h4>
                                </div>	
                                : null
                            }  

                            <img className="product-photo" src={image} alt="" />
                        </div>
                       
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 product-details-container">
                        <h3 className="product-details-title">{title}</h3>
                        <div className="product-details-description">
                            <h5 className="description-header">Opis:</h5>
                            <div className="product-description">
                                Si culpa. Natus. Aliquid. Ex occaecat yet dolorem exercitationem voluptas. Odit dolore but enim, but consequat yet laborum tempora. Aliquam magna labore for proident nor do accusantium or anim. Eaque incidunt and mollit, adipisci yet dolorem nor et ut. Error sunt eaque minim yet voluptas so dolores yet rem. Ex sed nor pariatur dolor yet totam error, consectetur. Reprehenderit. Consequat. Dolor ullamco nor consequuntur. 
                            </div>
                        </div>
                        <div className="product-moreDetails">
                            <h5 className="moreDetails-header">Szczegóły:</h5>
                            <div className="product-moreDetails-container">
                                <Table striped>
                                    <tbody>
                                        <tr>
                                            <td>Autor:</td> 
                                            <td>{(authors || []).join(", ")}</td>                                          
                                        </tr>
                                        <tr>
                                            <td>Typ:</td> 
                                            
                                                {
                                                    type === "Book" ? <td> Książka </td>: <td>Komiks  </td>
                                                }
                                          
                                        </tr>
                                        <tr>
                                            <td>Oprawa:</td> 
                                            
                                                {
                                                     cover === "soft" ? <td> miękka </td>: <td> twarda  </td>
                                                }
                                          
                                        </tr>
                                        <tr>
                                            <td>Liczba stron:</td> 
                                            <td> {numPages} </td>
            
                                        </tr>

                                    </tbody>

                                </Table>
                            </div>

                                
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-3 product-purchase-wrapper">
                        <div className="product-purchase-container">
                            {
                                sale ? 
                                <div className="product-price-wrapper">
                                    <h3 className="productDetails-price">Cena:	</h3> 
                                    <h3 className="productDetails-price">{price} zł 	</h3> 
                                    <h3 className="productDetails-Oldprice">{oldPrice} zł</h3>	
                                </div>
                                
                                
                                :
                                <h3 className="product-price">{price} zł</h3>
                            }
                            {
                                amount > 0 ? <h4 className="productDetails-amount">Dostępność: <span className="productDetails-available">W magazynie</span></h4> 
                                : 
                                <h4 className="productDetails-amount">Dostępność: <span className="productDetails-unavailable">Brak</span></h4>
                            }
                    
                            <Row className="center-justify productList-actions">
                                <Button className="btn-add" onClick={() => this.props.addToCart(this.props.selectedProduct)}>DODAJ DO KOSZYKA({(cartItem && cartItem.quantity) || 0})</Button >
                                {
                                    cartItem ? <Button color="danger" className="btn-remove" onClick={() => this.props.removeFromCart(cartItem)}>USUŃ 1</Button >	: null
                                }
                            </Row>
                            
                        </div>
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
