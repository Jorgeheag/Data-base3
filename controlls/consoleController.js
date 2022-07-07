
const { GamesInConsole } = require('../models/gamesInConsole');
const { Games } = require('../models/gamesModel');
const { Console } = require('../models/modelConsole');

// Utils
const { catchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appError');

const getAllConsoles = catchAsync(async (req, res, next) => {
	const console = await Console.findAll({
		where: { status: 'active' },
		include: [
			{model: GamesInConsole, attributes:['id', 'gameId'],
				include: [{model: Games, attributes: ['id','title'] }]},
		],
	});

	res.status(200).json({
		status: 'success',
		data: { console },
	});
});

const createConsole = catchAsync(async (req, res, next) => {
	const { name, company } = req.body;

	const newConsole = await Console.create({
		name,
		company
	});

	res.status(200).json({
		status: 'success',
		data: { newConsole },
	});
});

const updateConsole = catchAsync(async (req, res, next) => {
	const { console } = req;
	const { name } = req.body;

	await console.update({ name });

	res.status(204).json({ status: 'success' });
});

const deleteConsole = catchAsync(async (req, res, next) => {
	const { console } = req;

	await console.update({ status: 'deleted' });

	res.status(204).json({ status: 'success' });
});

module.exports = {
    getAllConsoles,
    createConsole,
    updateConsole,
    deleteConsole  
};