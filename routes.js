// add express package and create a new express app
const express = require('express');
const bodyParser = require('body-parser').urlencoded({ extended: false });
const app = express();
const handlers =  require('./handlers');

// set the body parser to parse body of incoming requests
app.use(bodyParser);

app.post('/call', handlers.answer);
app.post('/steps/1', handlers.step1);
app.post('/steps/2', handlers.step2);
app.post('/steps/3', handlers.step3);

// return a not found error on any other route
app.all('*', (req, res) => {
  console.error(req.method, req.url, req.body, req.headers);
  res.status(404).send('Not Found');
});

module.exports = app;