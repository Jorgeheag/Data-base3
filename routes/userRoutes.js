const express = require('express');

// Controllers
const {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
	login
} = require('../controlls/userControler');

const { protectSession, protectUserAccount } = require('../middleWares/authenMiddleware')
const { createUserValidators } = require('../middleWares/validatorsMiddleware')
const { userExists } = require('../middleWares/userMiddleware');

const userRouter = express.Router();



userRouter.use('/signup',createUserValidators).route('/signup').post( createUser);

userRouter.route('/login').post(login);

userRouter.use(protectSession)

userRouter.route('/').get(getAllUsers);//protejer

userRouter.use('/:id',userExists).route('/:id').patch(updateUser).delete( deleteUser ); //protejer


module.exports = { userRouter };