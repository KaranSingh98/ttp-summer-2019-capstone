const Sequelize = require('sequelize');
const db = require('../db');

const User = db.define('user', {
  id:{
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: Sequelize.STRING
  },
  googleId: {
    type: Sequelize.STRING
  }
});
module.exports = User;
