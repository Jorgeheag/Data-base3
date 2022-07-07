const express = require('express');

// Controllers
const { globalErrorHandler } = require('./controlls/errorController');

// Routers
const { userRouter } = require('./routes/userRoutes');
const { gamesRouter } = require('./routes/gamesRoutes');
const { consoleRouter } = require('./routes/consoleRoutes');

const app = express();

// Enable incoming JSON data
app.use(express.json());

// Endpoints
app.use('/api/v1/users',userRouter);
app.use('/api/v1/games', gamesRouter);
app.use('/api/v1/consoles', consoleRouter);

app.use(globalErrorHandler);

module.exports = { app };