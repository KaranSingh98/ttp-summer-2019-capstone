const router = require("express").Router();
const bodyParser = require('body-parser');
const Player=require("../database/models/player.js");
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


router.get("/", (req, res, next) => {
  {
    res.json("get request for players");
  }

});

router.get("/:id",  async (req, res, next) => {
  try {
    let player = await Player.findByPk(req.params.id);
    if (player) {

      res.json(player);
    } else {
      fetchPlayerApi(req.params.id)
        //.then( (data) => console.log(data) )
        .then( (data) => {
          const {id, first_name, last_name, position, team:{name, id:team_id} } = data;
          Player.create( {id, first_name, last_name, position, team_name:name, team_id} )
            .then((player) => res.json(player));

        })
        .catch( (error) => error);

    }
  } catch (error) {
    next(error);
  }
});



module.exports = router;
