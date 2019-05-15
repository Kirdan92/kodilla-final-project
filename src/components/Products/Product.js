import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';


const Product = (props) => {

	
	return(
		<div className="product-container">	
			<Link to={'/product/' + props.product.id} className="center-align">
				
				<h2 className="product-title">{props.product.title}</h2>
				</Link>
				<Link to={'/product/' + props.product.id} className="center-align">	
				<img title={props.product.name} src={props.product.image} alt={props.product.name}/>
			</Link>
			<h4 className="product-authors">Autor: {props.product.authors}</h4>
			<h4 className="product-cover">Oprawa: {props.product.cover}</h4>
			<h3 className="product-price">{props.product.price} zł</h3>
			<Button color="info" onClick={() => props.addToCart(props.product)}>DODAJ DO KOSZYKA({(props.cartItem && props.cartItem.quantity) || 0})</Button >
			{
				props.cartItem ? <Button color="danger" onClick={() => props.removeFromCart(props.cartItem)}>USUŃ 1</Button >	: null
			}			
		</div>
	)
};

export default Product;