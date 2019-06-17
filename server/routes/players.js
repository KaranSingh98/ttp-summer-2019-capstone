const router = require("express").Router();
const bodyParser = require('body-parser');
const Player=require("../database/models/player.js");
const axios=require("axios");

router.use(bodyParser.json());

router.get("/", (req, res, next) => {
  {
    res.json("get request for players");
  }

});

router.get("/:id", (req, res, next) => {
  try {
    let player = await Player.findByPk(req.params.id);
    if (player) {
      res.json(player);
    } else {


    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;

const async fetchSearch = (query) => {
    let url = "https://www.balldontlie.io/api/v1/players?search=" + query;

    try
    {
      let { data }  = await axios.get(url);
      this.setState({results: data.data});
    }
    catch(err)
    {
      console.log(err);
    }
};
