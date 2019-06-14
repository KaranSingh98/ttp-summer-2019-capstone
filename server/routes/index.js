const router = require("express").Router();
const bodyParser = require('body-parser');
//subrouters
const studentsRouter = require("./students");

const campusesRouter = require("./campuses");


router.use("/students", studentsRouter);
router.use("/campuses", campusesRouter);

router.use((req, res, next) => {
  const error = new Error("Not Found, Please Check URL!");
  error.status = 404;
  next(error);
});


module.exports = router;
