import React from 'react';
import Book from './Book';
import {cartItemsQuantity} from '../Cart'

const BooksList = (props) => (
    <div className="book-list-container">
        {props.books.map(book => {
            return (               
                <div className="single-book" key={book.id}>
                    <Book 
                        book={book} 
                        addItem={props.addItem}
                        cart={cartItemsQuantity(props.cart)}
                    />
                </div>
            )
        })}
    </div>
);

export default BooksList;


