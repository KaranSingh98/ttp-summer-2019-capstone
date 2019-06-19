const router = require("express").Router();
const bodyParser = require('body-parser');
const Player=require("../database/models/player.js");
const User=require("../database/models/user.js");
const axios=require("axios");

//router.use(bodyParser.json());

router.get('/me', (req, res, next) => {
  res.json(req.user || {});
});

router.put('/login', async (req, res, next) => {

  try {

    const user = await User.findOne({
      where: {
        email: req.body.email,
        password: req.body.password
      }
    });

    if (user) {

      req.login(user, (err) => err ? next(err) : res.json(user));
      // req.session.user = user;
      // console.log(req.user);

    } else {

      const err = new Error('Incorrect email or password!');
      err.status = 401;
      throw err;
    }

  } catch (err) {
    next(err);
  }

});

router.delete('/logout', (req, res, next) => {
  req.logout();
  req.session.destroy((err) => {
    if (err) return next(err);
    res.status(204).end();
  });
});
module.exports = router;
