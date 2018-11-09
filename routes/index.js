const router = require('express').Router();
const layout = require('../views/layout');

module.exports = router;

router.get('/', (req, res) => {
  res.send(layout(''));
});
