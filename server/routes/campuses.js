const router = require("express").Router();
const bodyParser = require('body-parser');
const { Campus, Student } = require('../database/models');

router.use(bodyParser.json());
//serves up all campuses
router.get("/", (req, res, next) => {
  {
    Campus.findAll()
      .then(campus => res.json(campus))
      .catch(next);
  }
  // const allCampus =  Campus.findAll();
  // console.log(allCampus);

});
//serves up campus with id
router.get('/:id', async(req, res, next) => {
  try {
    //  SELECT * FROM campus WHERE id = 'req.params.id'
    let campus = await Campus.findByPk(req.params.id);
    if (campus) {
      res.json(campus);
    } else {
      res.status(404).send('Campus not found');
    }
  } catch (error) {
    next(error);
  }
});
//add new campus
router.post('/', async (req, res, next) => {
  try {
    //  INSERT INTO students ("col1", "col2") VALUES ('val1', 'val2')
    let campus = await Campus.create(req.body);
    res.status(201).json(campus);
  } catch (err) {
    next(err);
  }
});
//delete campus
router.delete('/:id', async (req, res, next) => {
  try {
    const deleteCampusIds = await Student.update({campusId: null}, {
      where: { campusId: req.params.id},
      returning: true,
      plain: true,
    });
    //  DELETE FROM campus WHERE id = req.prams.id
    const deleteCount = await Campus.destroy({
      where: { id: req.params.id },
    });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});
//edit campus
router.put('/:id', async (req, res, next) => {
  try {
    //  UPDATE campuses SET "col1" = 'val1', "col2" = 'val2' WHERE id = req.params.id
    let updatedCampusInfo = await Campus.update(req.body, {
      where: { id: req.params.id },
      returning: true,
      plain: true,
    });
    res.json(updatedCampusInfo[1]);
  } catch (err) {
    next(err);
  }
});

router.get('/:id/students', async(req,res,next) => {
  try {
    //  SELECT * FROM campuses JOIN students ON campuses."id" = students."campusId";
    const campuses = await Campus.findAll({where: {
      id: req.params.id,
    },include: [Student] });
    res.json(campuses[0]);
  } catch (error) {
    next(error);
  }
});

//remove student from campus
router.put('/:id/students/:studentId', async (req, res, next) => {
  try {
    //  UPDATE campuses SET "col1" = 'val1', "col2" = 'val2' WHERE id = req.params.id
    let updatedStudentInfo = await Student.update({
      campusId :null
    }, {
      where: { id: req.params.studentId,
               campusId: req.params.id},
      returning: true,
      plain: true,
    });
    res.json(updatedStudentInfo[1]);
  } catch (err) {
    next(err);
  }
});

//edit campus information (including adding/removing students)




module.exports = router;
