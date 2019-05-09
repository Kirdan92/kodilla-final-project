import React from 'react';
import Book from './Book';

const BooksList = (props) => (
    <div className="book-list-container">
        {props.books.map(book => {
            return (               
                <div className="single-book" key={book.id}>
                    <Book 
                        book={book} 
                        addToCart={props.addToCart}
                        removeFromCart={props.removeFromCart}
                        cartItem={props.cart.filter(cartItem => cartItem.id === book.id)[0]}
                    />
                </div>
            )
        })}
    </div>
);

export default BooksList;


