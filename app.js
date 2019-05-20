var express = require('express');
var app = express();
var router = express.Router()
var bodyParser = require('body-parser');
const apiAdapter = require('./apiAdapter')

const BASE_URL = 'http://localhost:3000'
const api = apiAdapter(BASE_URL)
const port = 3001;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data)
  })
})

router.get('/products', (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data)
  })
})

app.use(router)

const server = app.listen(port, () => {
  console.log('App started on ' + port);
});