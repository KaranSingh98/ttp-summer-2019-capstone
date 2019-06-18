const { User, Player } = require('../database/models');
const players = require('../data/players');
const users  = require('../data/users');


const populateUserTable = async (users) => {
  for (let i = 0; i < users.length; i++) {
    let currentUser = users[i];
    let builtUser = await User.build(currentUser);
    await builtUser.save();
  }
};
const populatePlayerTable = async (players) => {
  for (let i = 0; i < players.length; i++) {
    let currentPlayer = players[i];
    let builtPlayer = await Player.build(currentPlayer);
    await builtPlayer.save();
  }
};




const seedDatabase = async () => {
  try {

    await populateUserTable(users);
    await populatePlayerTable(players);

    console.log("Successfully seeded!");
    process.exit(0);
  }
  catch (err) {
    console.log(err);
    process.exit(1);
  }
};

seedDatabase();
