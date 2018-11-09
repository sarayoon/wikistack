const router = require('express').Router();
const { addPage, main, wikiPage } = require('../views');
const { Page } = require('../models');

module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const allPages = await Page.findAll();
    res.send(main(allPages));
  } catch (err) {
    next(err);
  }
});

router.get('/add', (req, res, next) => {
  res.send(addPage());
});

router.get('/:slug', async (req, res, next) => {
  try {
    const foundPage = await Page.findOne({
      where: { slug: req.params.slug },
    });
    res.send(wikiPage(foundPage));
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  const title = req.body.title;
  const page = new Page({
    title: title,
    content: req.body.content,
  });
  try {
    await page.save();
    res.redirect(`/wiki/${page.slug}`); // REVIEW THIS WHY !! ?
  } catch (error) {
    next(error);
  }
});
