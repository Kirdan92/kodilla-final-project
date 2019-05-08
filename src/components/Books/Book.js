import React from 'react';

const Book = (props) => {

	const itemsInCart = props.cart.filter(item => item.id === props.book.id)[0]
	return(
		<div className="book-container">
		
			<h2>{props.book.title}</h2>
			<img title={props.book.name} src={props.book.image} />
			<h4>{props.book.author}</h4>
			<h3>{props.book.price} zł</h3>
			<button onClick={() => props.addItem(props.book)}>DODAJ DO KOSZYKA({(itemsInCart && itemsInCart.quantity) || 0})</button>
		</div>
	)
};

export default Book;