import React from 'react';
import { Button, Row } from 'reactstrap';
import { Link } from 'react-router-dom';


const Product = (props) => {

	
	return(
		<div className="product-container col-sm-12">	
				{
					props.product.sale ? 
					<div className="sale-marker">
						<h4>Promocja</h4>
					</div>	
					: null
				}
			<div className="product-image-wrapper">

				
				<Link to={'/product/' + props.product.id} className="center-align">	
					<img title={props.product.name} src={props.product.image} alt="product's cover"  />
				</Link>
			</div>
			<div className="product-title-wrapper">
				<Link className="product-link" to={'/product/' + props.product.id}>	
					<h2 className="product-title">{props.product.title}</h2>
				</Link>
				<h4 className="product-authors">Autor: {props.product.authors}</h4>
				{
					props.product.type === "Book" ? <h4 className="product-cover">Książka</h4> : <h4 className="product-cover">Komiks</h4>
				}
				
				<h4 className="product-cover">Oprawa: {props.product.cover}</h4>
			
			</div>
			
				{
					props.product.sale ? 
					<div className="product-price-wrapper">
						<h3 className="product-price">{props.product.price} zł 	</h3> 
						<h3 className="product-Oldprice">{props.product.oldPrice} zł</h3>	
					</div>
					
					 
					:
					<h3 className="product-price">{props.product.price} zł</h3>
				}
			<Row className="center-justify productList-actions">
				<Button className="btn-add" onClick={() => props.addToCart(props.product)}>DODAJ DO KOSZYKA({(props.cartItem && props.cartItem.quantity) || 0})</Button >
				{
					props.cartItem ? <Button color="danger" className="btn-remove" onClick={() => props.removeFromCart(props.cartItem)}>USUŃ 1</Button >	: null
				}		
			</Row>
	
		</div>
	)
};

export default Product;