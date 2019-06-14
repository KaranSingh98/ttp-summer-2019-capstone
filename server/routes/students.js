const router = require("express").Router();
const bodyParser = require('body-parser');
const { Student, Campus } = require('../database/models');

router.use(bodyParser.json());

router.get("/", (req, res, next) => {
  {
    Student.findAll({include:[Campus]})
      .then(student => res.json(student))
      .catch(next);
  }

});

//serves up student with id
router.get('/:id', async(req, res, next) => {
  try {
    //  SELECT * FROM campus WHERE id = 'req.params.id'
    let student = await Student.findByPk(req.params.id);
    if (student) {
      res.json(student);
    } else {
      res.status(404).send('Student not found');
    }
  } catch (error) {
    next(error);
  }
});

//add new student
router.post('/', async (req, res, next) => {
  try {
    //  INSERT INTO students ("col1", "col2") VALUES ('val1', 'val2')
    let student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (err) {
    next(err);
  }
});

//delete campus
router.delete('/:id', async (req, res, next) => {
  try {
    //  DELETE FROM campus WHERE id = req.prams.id
    const deleteCount = await Student.destroy({
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
    let updatedStudentInfo = await Student.update(req.body, {
      where: { id: req.params.id },
      returning: true,
      plain: true,
    });
    res.json(updatedStudentInfo[1]);
  } catch (err) {
    next(err);
  }
});


router.get('/:id/campus', async(req,res,next) => {
  try {
    //  SELECT * FROM students JOIN campuses ON students."id" = campuses."studentId";
    const students = await Student.findAll({where: {
      id: req.params.id,
    },include: [Campus] });
    const campuses = await Campus.findAll();
    res.json({
      id: students[0].id,
      firstName: students[0].firstName,
      lastName: students[0].lastName,
      gpa: students[0].gpa,
      image: students[0].image,
      campusId: students[0].campusId,
      campus: students[0].campus,
      campuses:campuses
    });
  } catch (error) {
    next(error);
  }
});




//edit campus information (including adding/removing students)




module.exports = router;
