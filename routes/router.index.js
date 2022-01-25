const express = require('express');
const imageRouter = require('../routes/images.routes');
const rootRouter = express.Router();
const app = express();

rootRouter.use('/api/images', imageRouter);

module.exports = rootRouter;