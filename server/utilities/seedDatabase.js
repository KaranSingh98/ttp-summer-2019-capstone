const { Student, Campus } = require('../database/models');
const campuses = require('../data/campuses');
const students = require('../data/students');

const populateCampusTable = async (campuses) => {
  for (let i = 0; i < campuses.length; i++) {
    let currentCampus = campuses[i];
    let builtCampus = await Campus.build(currentCampus);
    builtCampus.teamId = i + 1;
    await builtCampus.save();
  }
};

const populateStudentTable = async (students) => {
  for (let i = 0; i < students.length; i++) {
    let currentStudent = students[i];
    let builtStudent = await Student.build(currentStudent);
    builtStudent.teamId = i + 1;
    await builtStudent.save();
  }
};

const seedDatabase = async () => {
  try {

    await populateCampusTable(campuses);
    await populateStudentTable(students);

    console.log("Successfully seeded!");
    process.exit(0);
  }
  catch (err) {
    console.log(err);
    process.exit(1);
  }
};

seedDatabase();
