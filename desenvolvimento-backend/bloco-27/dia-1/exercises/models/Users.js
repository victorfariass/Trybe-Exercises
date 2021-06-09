const connection = require('./connection');

const { ObjectId } = require('mongodb');

const getAll = async () => {
  return connection()
    .then((db) => db.collection('users').find().toArray());
};

const addUser = async (firstName, lastName, email, password) => {
  return connection()
    .then((db) => db.collection('users').insertOne({ firstName, lastName, email, password}));
};

const getById = async (id) => {
  return connection()
    .then((db) => db.collection('users').findOne(ObjectId(id)));
};

const attUser = async (id, firstName, lastName, email, password) => {
  return connection()
    .then((db) => db.collection('users')
    .updateOne(ObjectId(id), {
      $set: {
        firstName,
        lastName,
        email,
        password
      }
    }));
};

const validations = (firstName, lastName, email, password) => {
  const fields = [firstName, lastName, email, password];

  if (fields.includes(undefined) || fields.includes(null) || fields.includes('')) {
    return false;
  };

  const passwordRegex = /[a-z0-9]{6,}/ig;

  return passwordRegex.test(password);
};

module.exports = {
  getAll,
  validations,
  addUser,
  getById,
  attUser,
}