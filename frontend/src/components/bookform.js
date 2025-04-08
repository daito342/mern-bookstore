import React, { useState } from 'react';
import axios from 'axios';

const BookForm = ({ fetchBooks }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBook = { title, author, price };
    await axios.post('http://localhost:5000/api/books', newBook);
    fetchBooks();
    setTitle('');
    setAuthor('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Añadir Libro</h2>
      <input type="text" placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="text" placeholder="Autor" value={author} onChange={(e) => setAuthor(e.target.value)} required />
      <input type="number" placeholder="Precio" value={price} onChange={(e) => setPrice(e.target.value)} required />
      <button type="submit">Añadir</button>
    </form>
  );
};

export default BookForm;