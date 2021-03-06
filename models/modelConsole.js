const { db, DataTypes } = require('../utils/dataBase');



// Create our first model (table)
const Console = db.define('console', {
	id: {
		primaryKey: true,
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	company: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
	
	status: {
		type: DataTypes.STRING,
		allowNull: false,
		defaultValue: 'active',
	},
});

module.exports = { Console };