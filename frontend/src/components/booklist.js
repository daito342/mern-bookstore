import React from 'react';

const BookList = ({ books, selectBook }) => {
return (
    <div className="book-list">
        <h2>Libros Disponibles</h2>
        {books.map(book => (
        <div key={book._id} onClick={() => selectBook(book)} className="book-item">
            <h3>{book.title}</h3>
            <p>{book.author}</p>
        </div>
        ))}
    </div>
    );
};

export default BookList;