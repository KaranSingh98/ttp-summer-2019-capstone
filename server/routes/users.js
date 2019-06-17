const router = require("express").Router();
const bodyParser = require('body-parser');
const { User, Player } = require('../database/models');


router.use(bodyParser.json());

router.get("/", async (req, res, next) => {

  User.findAll()
    .then(campus => res.json(campus))
    .catch(next);


});

router.get('/:id', async(req, res, next) => {
  try {
    //  SELECT * FROM campus WHERE id = 'req.params.id'
    let user  = await User.findByPk(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    console.log("do it");
    //  INSERT INTO user ("col1", "col2") VALUES ('val1', 'val2')
    let user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
});


router.put('/:id', async (req, res, next) => {
  try {
    //  UPDATE user  SET "col1" = 'val1', "col2" = 'val2' WHERE id = req.params.id
    let updatedUserInfo = await User.update(req.body, {
      where: { id: req.params.id },
      returning: true,
      plain: true,
    });
    res.json(updatedUserInfo[1]);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
