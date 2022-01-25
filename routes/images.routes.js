const express = require('express');
const router = express.Router();
const imageControllers = require('../controllers/image.controller.js');
const imageModel = require('../models/image.schema.js');
const createHttpError = require('http-errors');

// define the post images route
router.post('/', (req, res, next) => imageControllers.postImage(req,res,next))

// define the get images route
router.get('/', (req, res, next) => imageControllers.getImage(req, res, next)); 

module.exports = router