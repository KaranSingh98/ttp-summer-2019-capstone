const router = require("express").Router();
const bodyParser = require('body-parser');
const { User, Player } = require('../database/models');
const axios=require("axios");


router.use(bodyParser.json());
async function fetchPlayerApi(query){
  let url = "https://www.balldontlie.io/api/v1/players/" + query;

  try
  {
    let data =  await axios.get(url);
    console.log("making an api call");
    return (data.data);
  }
  catch(err)
  {
    console.log(err);
  }
};




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


/************ FAVORITES ***************/
router.post('/:id/players/:playerId', async (req,res,next) => {
  try {
    let player = await Player.findByPk(req.params.playerId);
    let user = await User.findByPk(req.params.id);
    if (player) {
      user.addPlayer(player);
      res.status(201).json({playerId:player.id, userId: user.id});

    } else {
      fetchPlayerApi(req.params.playerId)
        .then( (data) => {
          const {id, first_name, last_name, position, team:{name, id:team_id} } = data;
          Player.create( {id, first_name, last_name, position, team_name:name, team_id} )
            .then((player) => {
              res.status(201).json({playerId:player.id, userId: user.id});
              player.addUser(user);
            });
        })
        .catch( (error) => error);
    }
  } catch (error) {
    next(error);
  }

});

router.delete('/:id/players/:playerId', async (req,res,next) => {
  try {
    let player = await Player.findByPk(req.params.playerId);
    let user = await User.findByPk(req.params.id);
    res.status(201).json({playerId:player.id, userId: user.id});
    player.removeUser(user);
  } catch (error) {
    next(error);
  }

});

router.get('/:id/favorites', async(req,res,next) => {
  /*
    try{const users = await User.findAll({where: {
    id: req.params.id,
    },include: [Player] });
    res.json(users[0].players);
    }
    catch (error) {
    next(error);
    }*/
  try{
    const user = await User.findByPk(req.params.id);
    res.json(await user.getPlayers());
  }
  catch(error ){
    next(error);
  }

});


module.exports = router;
