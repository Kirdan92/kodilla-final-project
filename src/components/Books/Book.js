import React from 'react';

const Book = (props) => {

	
	return(
		<div className="book-container">	
			<h2>{props.book.title}</h2>
			<img title={props.book.name} src={props.book.image} />
			<h4>{props.book.author}</h4>
			<h3>{props.book.price} zł</h3>
			<button onClick={() => props.addToCart(props.book)}>DODAJ DO KOSZYKA({(props.cartItem && props.cartItem.quantity) || 0})</button>
			{
				props.cartItem ? <button onClick={() => props.removeFromCart(props.cartItem)}>USUŃ 1</button>	: null
			}
				
		</div>
	)
};

export default Book;