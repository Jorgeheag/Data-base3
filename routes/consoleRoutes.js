const express = require('express');

// Controllers
const {
    getAllConsoles,
    createConsole,
    updateConsole,
    deleteConsole  
} = require('../controlls/gamesControler');

const { protectSession } = require('../middleWares/authenMiddleware')


const consoleRouter = express.Router();

consoleRouter.get('/', getAllConsoles);

consoleRouter.use(protectSession);
//preguntar como validar
consoleRouter.post('/', createConsole);//protejer y trae los juegos que estan registradas con dichas consolas

consoleRouter.patch('/:id', updateConsole);
consoleRouter.delete('/:id', deleteConsole); //protejer


module.exports = { consoleRouter };

