import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import BookDetail from './components/BookDetail';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:5000/api/books');
    setBooks(response.data);
  };

  const selectBook = (book) => {
    setSelectedBook(book);
  };

  return (
    <div className="App">
      <h1>Librería Digital</h1>
      <div className="container">
        <BookList books={books} selectBook={selectBook} />
        {selectedBook && <BookDetail book={selectedBook} />}
        <BookForm fetchBooks={fetchBooks} />
      </div>
    </div>
  );
}

export default App;