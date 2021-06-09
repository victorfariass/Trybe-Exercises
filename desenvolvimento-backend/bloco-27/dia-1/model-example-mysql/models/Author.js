const connection = require('./connection');

const getNewAuthor = ({ id, firstName, middleName, lastName }) => {
  const fullName = [firstName, middleName, lastName].filter((name) => name).join(" ");
  return {
    firstName,
    middleName,
    lastName,
    fullName
  }
}

const serialize = (authorData) => {
  return {
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name,
  };
};

const getAll = async () => {
  const [authors] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM authors');

  return authors.map(serialize).map(getNewAuthor);
}

const getById = async (id) => {
  const query = 'SELECT id, first_name, middle_name, last_name FROM authors WHERE id = ?';
  const [authors] = await connection.execute(query, [id]);

  if (authors.length === 0) return null;

  return authors.map(serialize).map(getNewAuthor);
}

module.exports = {
  getAll,
  getById,
}