const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.listen(8000, () => {
  console.log('Server started!');
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, ContentType, Content-Type, Accept");
  next();
});

let cars = [
    {brand: 'Arrinera', price: 200000, model: 'Husarya', nationality: 'Poland'},
    {brand: 'Aston Martin', price: 87150, model: 'DB9', nationality: 'Great Britain'},
    {brand: 'Audi', price: 6000, model: 'A4', nationality: 'Germanay'},
    {brand: 'BMW', price: 55000, model: 'M140i', nationality: 'Germany'},
    {brand: 'Citroen', price: 3000, model: 'Xsara Picasso', nationality: 'France'},
    {brand: 'Ford', price: 6500, model: 'Escort', nationality: 'USA'},
    {brand: 'Skoda', price: 20000, model: 'Octavia', nationality: 'Czech Republic'},
    ];


app.route('/api/cars').get((req, res) => {
    res.send(cars);
});


app.route('/api/car').post((req, res) => {
    console.log(req.body);
    cars.push(req.body);
    res.send({});
})
