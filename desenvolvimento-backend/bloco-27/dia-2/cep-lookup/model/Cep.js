const connection = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM cep_lookup.ceps';
  const [ceps] = await connection.execute(query);
  return ceps;
};

const getByCep = async (cepParam) => {
  const query = 'SELECT * FROM cep_lookup.ceps WHERE cep = ?';
  const [cep] = await connection.execute(query, [cepParam]);
  if (cep === '') return null;
  return cep;
}

module.exports = {
  getAll,
  getByCep,
}