const Sequelize = require('sequelize');
const db = require('../db');

const Campus = db.define("campus", {

  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },

  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  numStudents: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: "https://www.voicesofyouth.org/sites/default/files/images/2019-03/school.jpg"
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description:{
    type: Sequelize.STRING,
    allowNull: true

  }


});

module.exports = Campus;
