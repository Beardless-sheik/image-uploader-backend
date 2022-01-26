const express = require('express');
const imageRouter = require('../routes/images.routes');
const userRouter = require('../routes/user.router');
const rootRouter = express.Router();
const app = express();

//Controller Imports
const userControllers = require('../controllers/user.controller');

rootRouter.use('/api/images', imageRouter);
rootRouter.use('/api/users', userRouter);
rootRouter.post('/api/register', (req, res, next) => userControllers.registerUser(req,res,next));
rootRouter.post('/api/login', (req, res, next) => userControllers.loginUser(req,res,next));

module.exports = rootRouter;