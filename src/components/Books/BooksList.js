import React from 'react';

import Book from './Book';

const BooksList = (props) => (
    <div className="users-list">
        {props.books.map(book => {
            return (
                <div className="single-book" key={book.id}>
                    <Book book={book} />
                </div>
            )
        })}
    </div>
);

export default BooksList;