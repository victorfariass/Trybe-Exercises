const connection = require('./connection');

const { ObjectId } = require('mongodb');

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
  return connection()
    .then((db) => db.collection('authors').find().toArray())
      .then((authors) =>
        authors.map(({ _id, firstName, middleName, lastName }) =>
          getNewAuthor({
            id: _id,
            firstName,
            middleName,
            lastName,
          })
        )
      );
}

const findById = async (id) => {
  if (!ObjectId.isValid(id)) {
      return null;
  }

  const authorData = await connection()
      .then((db) => db.collection('authors').findOne(new ObjectId(id)));

  if (!authorData) return null;

  const { firstName, middleName, lastName } = authorData;

  return getNewAuthor({ id, firstName, middleName, lastName });
};

module.exports = {
  getAll,
  findById,
}