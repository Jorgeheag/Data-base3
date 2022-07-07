const { DataTypes } = require('sequelize');
const { db } = require('../utils/dataBase');

const Games = db.define('games', {
	id: {
		primaryKey: true,
		autoIncrement: true,
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	title: {
		type: DataTypes.STRING(100),
		allowNull: false,
	},
	genere: {
		type: DataTypes.STRING(100),
		allowNull: false,
	},
	
	status: {
		type: DataTypes.STRING(10),
		allowNull: false,
		defaultValue: 'active',
	},
});

module.exports =  Games ;