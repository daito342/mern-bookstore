const Book = require("backend/models/book.js");

// Obtener todos los libros
exports.getBooks = async (req, res) => {
    try {
    const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Crear un nuevo libro
exports.createBook = async (req, res) => {
    const book = new Book(req.body);
    try {
        const newBook = await book.save();
        res.status(201).json(newBook);
} catch (err) {
    res.status(400).json({ message: err.message });
}
};

// Obtener un libro por ID
exports.getBookById = async (req, res) => {
    try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Libro no encontrado' });
    res.json(book);
} catch (err) {
    res.status(500).json({ message: err.message });
}
};