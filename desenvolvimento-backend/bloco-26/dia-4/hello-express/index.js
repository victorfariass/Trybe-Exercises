const express = require('express');

const app = express();

app.get('/hello', handleHelloWorldRequest);

app.listen(3000, () => {
  console.log('Aplicação ouvindo a porta 3000');
});

function handleHelloWorldRequest(req, res) {
  res.status(200).send('Hello World!');
};
