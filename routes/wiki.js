const router = require('express').Router();
const { addPage, main } = require('../views');
const { Page } = require('../models');

module.exports = router;

router.get('/', (req, res, next) => {
  res.send(main('')); // insert pages object here
});

router.get('/add', (req, res, next) => {
  res.send(addPage());
});

router.post('/', async (req, res, next) => {
  const title = req.body.title;
  const page = new Page({
    title: title,
    content: req.body.content,
  });
  try {
    await page.save();
    console.log(page);
    res.redirect('/');
  } catch (error) {
    next(error);
  }
});
