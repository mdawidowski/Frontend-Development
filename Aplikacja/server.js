const express = require('express');
const app = express();

app.listen(8000, () => {
  console.log('Server started!');
});


app.route('/api/cars').get((req, res) => {
  res.send({
    cars: [{ brand: 'Aston Martin', founded: 1915 }, { brand: 'Fiat', founded: 1902 }]
  });
});

app.route('/api/cars/:brand').get((req, res) => {
  const requestedCarName = req.params['brand'];
  res.send({ brand: requestedCarName });
});

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.route('/api/cars').post((req, res) => {
  res.send(201, req.body);
});

app.route('/api/cars/:brand').put((req, res) => {
  res.send(200, req.body);
});

app.route('/api/cars/:nd').delete((req, res) => {
  res.sendStatus(204);
});
