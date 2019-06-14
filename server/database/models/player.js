const Sequelize = require('sequelize');
const db = require('../db');

const Player  = db.define("player", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  first_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  last_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  position:{
    type: Sequelize.STRING,
    allowNull: false
  },
  height_feet:{
    type: Sequelize.INTEGER,

  },
  height_inches:{
    type: Sequelize.INTEGER,

  },
  weight_pounds:{
    type: Sequelize.INTEGER,

  },
  team_name:{
    type: Sequelize.STRING,
    allowNull: false
  },
  team_id:{
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = Player;
