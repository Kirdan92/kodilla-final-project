import React from 'react';

const Book = (props) => (
	<div className="book-container">
		<h2>{props.book.title}</h2>
		<h2>{props.book.author}</h2>
	</div>
);

export default Book;