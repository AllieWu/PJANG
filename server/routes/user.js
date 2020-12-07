const express = require('express'),
    userRouter = express.Router(),
    userController = require('../controllers/userController.js'),
    verifyToken = require('../authHelperFunctions').verifyToken;


//call functions in router when a certain request is made

//get and post request on userRouter made to api/user (default route)
//index function finds all the users, create function creates a user
//get list of users before creating one to avoid creating a duplicate user
userRouter.route('/').get(userController.index).post(userController.create);

userRouter.post('/authenticate', userController.authenticate);

userRouter.post('/generateID', userController.createCustomer);

userRouter.use(verifyToken);
userRouter.route('/id').get(userController.show).patch(userController.update).delete(userController.destroy);

module.exports = userRouter;
