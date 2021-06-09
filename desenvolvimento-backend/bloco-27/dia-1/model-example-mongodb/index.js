const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const Author = require('./models/Author');
const Book = require('./models/Book');

app.get('/authors', async (req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const author = await Author.getById(id);

  if (!author) res.status(404).json({ message: 'Not found' });

  res.status(200).json(author);
})

app.get('/books', async (req, res) => {
  const books = await Book.getAll();

  res.status(200).json(books);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const books = await Book.getByAuthorId(id);

  if (!books) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(books);
})

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;
  if (!Book.bookValidation(title, author_id)) return res.status(400).json({ message: 'Dados inválidos' });

  await Book.addBook(title, author_id);

  res.status(200).json({ message: 'Livro criado com sucesso' });
})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));

