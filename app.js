var express = require('express');
var app = express();
var router = express.Router()
var bodyParser = require('body-parser');
const apiAdapter = require('./apiAdapter')

const BASE_URL = process.env.BACKEND_URL
const api = apiAdapter(BASE_URL)
const port = 3001;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  // Add your code here
  // Return the API Gateway event and query string parameters for example
  res.json({ success: 'get call succeed!', url: req.url });
});

router.get('/products', (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data)
  })
})

app.use(router)

const server = app.listen(port, () => {
  console.log('App started on ' + port + ' with ' + BASE_URL);
});

// Export the app object.
module.exports = server;