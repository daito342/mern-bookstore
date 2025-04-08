const express = require('express');
const bookController = require('./controllers/bookcontroller');

const router = express.Router();

// Rutas para libros
router.get('/', bookController.getBooks);
router.post('/', bookController.createBook);
router.get('/:id', bookController.getBookById);

module.exports = router;