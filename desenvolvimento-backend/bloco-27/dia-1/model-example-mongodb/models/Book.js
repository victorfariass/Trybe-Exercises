const connection = require('./connection');
const { ObjectId } = require('mongodb');
const Author = require('./Author');

const getAll = async () => {
  return connection()
    .then((db) => db.collection('books').find().toArray())
};

const getByAuthorId = async (author_id) => {
  return connection()
    .then((db) => db.collection('books').findOne({ author_id: author_id }))
}

const getById = async (id) => {
  return connection()
    .then((db) => db.collection('books').findOne(ObjectId(id)))
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
  getById,
  bookValidation,
  addBook,
};
