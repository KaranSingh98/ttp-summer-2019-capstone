const router = require("express").Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.get("/", (req, res, next) => {
  {
    res.json("get request for players");
  }

});

module.exports = router;
