const Player = require('./player');
const User  = require('./user');
// Associations;
// Source.association(Target);

// M:M;

Player.belongsToMany(User, {through:'favorites'});
User.belongsToMany(Player, {through:'favorites'});



module.exports = {
  Player, User
};
