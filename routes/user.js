const router = require('express').Router();
const { userList, userPages } = require('../views');
const { Page, User } = require('../models');

module.exports = router;

router.get('/users', async (req, res, next) => {
  try {
    const allUsers = await User.findAll();
    res.send(userList(allUsers));
  } catch (err) {
    next(err);
  }
});
