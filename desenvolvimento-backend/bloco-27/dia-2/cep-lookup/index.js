const express = require('express');
const {
  getAll,
  getByCep,
} = require('./model/Cep')

const app = express();

app.use(express.json());

app.get('/ceps', async (_req, res) => {
  const ceps = await getAll();
  res.status(200).json(ceps);
});

app.get('/ceps/:cep', async (req, res) => {
  const { cep } = req.params;
  if (cep.length > 8 || cep.length < 8) return res.status(400).json({
    error: { "code": "invalidData", "message": "CEP inválido" }
  });

  const cepReturn = await getByCep(cep);
  if (!cepReturn) return res.status(400).json({
    error: { "code": "invalidData", "message": "CEP não localizado" }
  });

  res.status(200).json(cepReturn);
});

app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong!' });
});

const PORT = 3000;

app.listen(PORT, () => console.log(`Online na porta ${PORT}`));