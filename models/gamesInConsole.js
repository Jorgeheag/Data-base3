const { db, DataTypes } = require('../utils/dataBase');

const { Games } = require('../models/gamesModel');

const { Console } = require('../models/modelConsole');


const GamesInConsole = db.define('gamesInConsole', {
	id: {
		primaryKey: true,
		autoIncrement: true,
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	gameId: {
		type: DataTypes.INTEGER,
        allowNull: false,
        references: {
             model: Games,
             key: 'id'
           }
	},
	consoleId: {
		type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Console,
          key: 'id'
        }
	},
	
	status: {
		type: DataTypes.STRING(10),
		allowNull: false,
		defaultValue: 'active',
	},
});

module.exports = { GamesInConsole };