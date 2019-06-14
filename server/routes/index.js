const router = require("express").Router();
const bodyParser = require('body-parser');
//subrouters
const usersRouter = require("./users");
const playersRouter = require("./players");

router.use("/players", playersRouter);
router.use("/users", usersRouter);


router.use((req, res, next) => {
  const error = new Error("Not Found, Please Check URL!");
  error.status = 404;
  next(error);
});


module.exports = router;
