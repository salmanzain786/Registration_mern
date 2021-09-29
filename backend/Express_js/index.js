const express = require('express')
const bodyParser = require('body-parser')
const app = new express()
const port = 8080
const path = require('path');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});


app.use('/',require(path.join(__dirname,"routes/user.js")));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})