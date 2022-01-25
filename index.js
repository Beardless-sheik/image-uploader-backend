const routeRouter = require('./routes/router.index');
require('dotenv').config(); 
const express = require('express'),
	  mongoose = require('mongoose'),
	  uuidv4 = require('uuid');
		database = require('./database/database.js');
const app = express();

const dotenv = require('dotenv');
const errorHandlerMiddleware = require('./middleware/error-handler.js');
dotenv.config();

database.connectToDatabase();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(errorHandlerMiddleware);
app.get('/', (req, res) => res.send('Upload Images API is running !'));
app.use('/', routeRouter);
app.listen(process.env.PORT, () => console.log('Server ready'));
