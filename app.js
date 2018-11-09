const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const morgan = require('morgan');
const router = require('./routes/index');
const models = require('./models');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(morgan('dev'));

module.exports = app; // this line is only used to make testing easier.

app.use(express.urlencoded({ extended: false }));
app.use('/', router);

const PORT = 1234;

const init = async () => {
  try {
    await models.db.sync();
  } catch (err) {
    console.error(err);
  }

  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
};

init();
