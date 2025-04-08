import React from 'react';

const BookDetail = ({ book }) => {
  return (
    <div className="book-detail">
      <h2>Detalles del Libro</h2>
      <h3>{book.title}</h3>
      <p><strong>Autor:</strong> {book.author}</p>
      <p><strong>Precio:</strong> ${book.price}</p>
      <p><strong>Disponible:</strong> {book.available ? 'Sí' : 'No'}</p>
    </div>
  );
};

export default BookDetail;