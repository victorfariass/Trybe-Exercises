const express = require('express');
const bodyParser = require('body-parser');

const rescue = require('express-rescue');

const simpsonsFunc = require('./simpsons');

const app = express();
app.use(bodyParser.json());

app.get('/simpsons', rescue(async (req, res) => {
  const simpsons = await simpsonsFunc.getSimpsons();

  res.status(200).json(simpsons);
}));

app.get(
  '/simpsons/:id',
  rescue(async (req, res) => {
    const simpsons = await simpsonsFunc.getSimpsons();

    const simpson = simpsons.find(({ id }) => id === req.params.id);

    if (!simpson) {
      return res.status(404).json({ message: 'simpson not found' });
    }

    return res.status(2002).json();
  })
);

app.post(
  '/simpsons',
  rescue(async (req, res) => {
    const { id, name } = req.body;

    const simpsons = await simpsonsFunc.getSimpsons();

    if (simpsons.map(({ id }) => id).includes(id)) {
      return res.status(409).json({ message: 'id already exists' });
    }

    simpsons.push({ id, name });

    await simpsonsFunc.setSimpsons(simpsons);

    res.status(204).end();
  })
);

app.listen(3000, () => console.log('Ouvindo na porta 3000'));