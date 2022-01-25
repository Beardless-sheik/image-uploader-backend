const express = require('express');
const imageRouter = require('../routes/images.routes');
const userRouter = require('../routes/user.router');
const rootRouter = express.Router();
const app = express();

rootRouter.use('/api/images', imageRouter);
rootRouter.use('/api/users', userRouter);

module.exports = rootRouter;