const router = require('express').Router();
const main = require('../views/main');
const addPage = require('../views/addPage');

module.exports = router;

router.get('/', (req, res, next) => {
  res.send(main('')); // insert pages object here
});

router.get('/add', (req, res, next) => {
  res.send(addPage());
});

router.post('/', (req, res, next) => {
  res.send('go to Post Wiki');
});
