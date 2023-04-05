const sequelize = require('../config/connection');
const { User, HorrorMovies } = require('../models');

const userData = require('./userData.json');
const horrorMoviesData = require('./horrorMoviesData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const horrorMovies of horrorMoviesData) {
        await HorrorMovies.create({
            ...horrorMovies,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        });
    }

    process.exit(0);
}

seedDatabase();

// Path: seeds/horrorMoviesData.json
