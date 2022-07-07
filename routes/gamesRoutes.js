const express = require('express');

// Controllers
const {
    getAllGames,
    getGameById,
    createGame,
    updateGame,
    deleteGame,
    createComment 
} = require('../controlls/gamesControler');

const { protectSession } = require('../middleWares/authenMiddleware')

const gamesRouter = express.Router();

gamesRouter.route('/').get(getAllGames);


gamesRouter.use(protectSession)

gamesRouter.route('/').post(createGame);//protejer

gamesRouter.route('/:id').patch(updateGame).delete(deleteGame); //protejer

gamesRouter.route('/reviews/:gameId').post(createComment);//protejer

module.exports = { gamesRouter };