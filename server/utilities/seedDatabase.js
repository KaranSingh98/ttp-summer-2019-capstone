const { User, Player } = require('../database/models');
//const players = require('../data/players');
//const users  = require('../data/users');

/*
const populateUserTable = async (campuses) => {
  for (let i = 0; i < users.length; i++) {
    let currentUser = users[i];
    let builtUser = await User.build(currentUser);
    await builtUser.save();
  }
};
*/





const seedDatabase = async () => {
  try {

    //await populateUserTable(users);
    //await populateFavoriteTable(favorites);

    console.log("Successfully seeded!");
    process.exit(0);
  }
  catch (err) {
    console.log(err);
    process.exit(1);
  }
};

seedDatabase();
