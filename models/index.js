// const sequelize = require('../config/connection');
// const { User } = require('../models');

// const userData = require('./userData.json');

// const seedDatabase = async () => {
//     await sequelize.sync({ force: true });

//     const users = await User.bulkCreate(userData, {
//         individualHooks: true,
//         returning: true,
//     });

//     process.exit(0);
// }

// seedDatabase();

const User = require('./User');
const Watchlist = require('./Watchlist');

module.exports = { User, Watchlist }
