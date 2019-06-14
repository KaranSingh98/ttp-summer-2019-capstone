const Student = require('./student');
const Campus  = require('./campus');

// Associations;
// Source.association(Target);

// O:M;
Campus.hasMany(Student); // A one-to-many relationship that adds the column titled "teamId" to the table of players;
Student.belongsTo(Campus); // A one-to-one relationship that adds the column titled "teamId" to the table of players;

module.exports = {
  Student,
  Campus
};
