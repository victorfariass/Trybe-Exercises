const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

const Users = require('./models/Users');  

app.get('/user', async (req, res) => {
  const users = await Users.getAll();
  res.status(200).json(users);
});

app.post('/user', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  Users.addUser(firstName, lastName, email, password);
  res.status(200).json({ message: 'ok' });
})

app.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  const user = await Users.getById(id);

  res.status(200).json(user);
});

app.put('/user/:id', async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;
  await Users.attUser(id, firstName, lastName, email, password);

  res.status(200).json({ message: 'Ok' });
})

app.listen(PORT, () => console.log(`Online na porta ${PORT}`));