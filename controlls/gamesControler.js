const { GamesInConsole } = require('../models/gamesInConsole');
const { Games } = require('../models/gamesModel');
const { Reviews } = require('../models/reviewsModel');
const { Console } = require('../models/modelConsole');

// Utils
const { catchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appError');

const getAllGames = catchAsync(async (req, res, next) => {
	const games = await Games.findAll({
		where: { status: 'active' },
		include: [
			{ model: GamesInConsole, attributes: ['id', 'consoleId'],
				include: [{model: Console, attributes: ['id', 'name'] }]},

			{model: Reviews, attributes:['id', 'comment']}],
	});

	res.status(200).json({
		status: 'success',
		data: { games },
	});
});

const getGameById = catchAsync(async (req, res, next) => {
	const { game } = req;

	res.status(200).json({
		status: 'success',
		data: { game },
	});
});

const createGame = catchAsync(async (req, res, next) => {
	const { title, genere } = req.body;

	const newGame = await Games.create({
		title,
		genere
	});

	res.status(200).json({
		status: 'success',
		data: { newGame },
	});
});

const updateGame = catchAsync(async (req, res, next) => {
	const { game } = req;
	const { title, genere } = req.body;

	await game.update({ title,genere });

	res.status(204).json({ status: 'success' });
});

const deleteGame = catchAsync(async (req, res, next) => {
	const { game } = req;

	await game.update({ status: 'deleted' });

	res.status(204).json({ status: 'success' });
});

const createComment = catchAsync(async (req, res, next) => {
    const { userId, gameId, comment } = req.body;

    const newComment = await Reviews.create({
        userId,
        gameId,
        comment
    });

    res.status(201).json({
        status: 'success',
        newComment,
    });
});


module.exports = {
    getAllGames,
    getGameById,
    createGame,
    updateGame,
    deleteGame,
	createComment   
};