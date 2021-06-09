const connection = require('./connection');
const Author = require('./Author');

const getAll = async () => {
  const [books] = await connection.execute('SELECT id, title FROM books');

  return books;
};

const getByAuthorId = async (id) => {
  const query = `SELECT id, title FROM books WHERE id = ?`
  const [books] = await connection.execute(query, [id]);

  if (books.length === 0) return null;

  return books;
}

const bookValidation = async (title, author_id) => {
  if (!title || title.length < 3 || typeof title !== 'string') return false;
  if (!author_id || typeof author_id !== 'number' || !(await Author.getById(author_id))) return false;
  return true;
}

const addBook = async (title, author_id) => {
  const query = 'INSERT INTO model_example.books (title, author_id) VALUES (?, ?)';

  await connection.execute(query, [title, author_id]);
};

module.exports = {
  getAll,
  getByAuthorId,
  bookValidation,
  addBook,
};
