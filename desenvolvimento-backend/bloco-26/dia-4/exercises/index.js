const bodyParser = require('body-parser');
const express = require('express');
const rescue = require('express-rescue');

const simpsonsFunc = require('./simpsons');

const app = express();

app.use(bodyParser.json());

app.use(function (err, req, res, next) {
  res.status(500).send(`Algo deu errado! Menssgem: ${err.message}`);
});

app.get('/ping', function (req, res) {
  res.json({ 'message': 'pong!' });
});

app.post('/hello', function (req, res) {
  const { name } = req.query;
  res.status(200).json({ message: `hello, ${name}` });
});

app.post('/greetings', function (req, res) {
  const { name, age } = req.query;
  if (parseInt(age, 10) <= 17) {
    return res.status(401).json({ message: `Unauthorized` });
  }

  res.status(200).json({ message: `Hello, ${name}` });
});

app.put('/users/:name/:age', function (req, res) {
  const { status } = req.body;

  res.status(200).json({ status: `${status}` });
});

app.get('/users/:name/:age', function (req, res) {

  res.status(200).json({ status: `${status}` });
});

app.listen(3000, () => console.log('Ouvindo na porta 3000'));