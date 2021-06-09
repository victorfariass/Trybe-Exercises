const { MongoClient } = require('mongodb');

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const MONGO_URL = 'mongodb://127.0.0.1:27017';

let db = null;

const connection = () => {
  return MongoClient.connect(MONGO_URL, OPTIONS)
    .then((conn) => {
      db = conn.db('exercises');
      return db;
    });
};

module.exports = connection;