// Here, we can register our models and export our modified db instance so that it can be imported in the main app;

const db = require('./db');

require('../database/models');

module.exports = db;
