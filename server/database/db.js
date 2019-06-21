// Here, we can instantiate our database and use Sequelize as well;

// Module dependencies;
const Sequelize = require('sequelize');
const databaseName = require('../utilities/databaseName');

// Confirmation message (limit these in production);
console.log('Opening database connection');

// This is our entry point, we instantiate the Sequelize instance accordingly;
//const db = new Sequelize(process.env.DATABASE_URL || `postgres://postgres:2468@localhost:5434/${databaseName}`, { logging: false });
/*
const db = new Sequelize(process.env.DATABASE_URL || `postgres://dvlvtfpfrexauh:86ba87ba9aa1898808abd01447ef0fa19efbea5122efc5c2f63c523051a207b6
@localhost:5432/d5l6foni4eojmi`, { logging: false });

*/
const db = new Sequelize(process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`, { logging: false });

// Export our instance of Sequelize, which will be modified with models;
module.exports = db;
