const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const morgan = require('morgan');
const router = require('./routes/index');
const { db } = require('./models');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(morgan('dev'));

module.exports = app; // this line is only used to make testing easier.

app.use(express.urlencoded({ extended: false }));
app.use('/', router);

db.authenticate().then(() => {
  console.log('connected to the database');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
