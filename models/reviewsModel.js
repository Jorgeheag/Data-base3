const { DataTypes } = require('sequelize');
const { db } = require('../utils/database');

// Models
const { User } = require('./UserModel');
const { Games } = require('./gamesModel');

const Reviews = db.define('reviews', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },
  gameId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Games,
      key: 'id'
    }
  },
  comment: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = { Reviews };