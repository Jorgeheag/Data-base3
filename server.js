const { app } = require('./app');

// Models
const { Games } = require('../models/gamesModel');
const { Console } = require('../models/modelConsole');
const { Reviews } = require('../models/reviewsModel');
const { User } = require('../models/UserModel');

// Utils
const { db } = require('./utils/dataBase');
const dotenv = require('dotenv')
dotenv.config({ path: './config.env' }) 

db.authenticate()
	.then(() => console.log('Db authenticated'))
	.catch(err => console.log(err));

// Establish model's relations

// 1 User <----> M Post
Games.belongsToMany(Games, { foreignKey: 'gameId', through: 'gamesInConsole', as: 'console' });
Console.belongsToMany(Console,{ foreignKey: 'consoleId', through: 'gamesInConsole', as: 'game' });

User.hasMany(Reviews,{ foreignKey: 'userId'});
Reviews.belongsTo(User)

Games.hasMany(Reviews, { foreignKey: 'gameId' });
Reviews.belongsTo(Games);



db.sync()
	.then(() => console.log('Db synced'))
	.catch(err => console.log(err));

app.listen(4000, () => {
	console.log('Express app running!!');
});





Games.belongsToMany(Games, { foreignKey: 'gameId', through: 'gamesInConsoles', as: 'consoles' });
Consoles.belongsToMany(Consoles, { foreignKey: 'consoleId', through: 'gamesInConsoles', as: 'games' });


User.hasMany(Reviews, { foreignKey: 'userId' });
Reviews.belongsTo(User);

Games.hasMany(Reviews, { foreignKey: 'gameId' });
Reviews.belongsTo(Games);