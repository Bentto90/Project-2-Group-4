const {model, DataTypes, Model} = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

// create our User model
class Watchlist extends Model {
    // set up method to run on instance data (per user) to check password
   
}

Watchlist.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        movie_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        movie_title: {
            type: DataTypes.STRING,
            allowNull: false
        },
       
       
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'watchlist',
    }
);

module.exports = Watchlist;