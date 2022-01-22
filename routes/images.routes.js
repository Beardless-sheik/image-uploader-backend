const express = require('express');
const router = express.Router();
const imageControllers = require('../controllers/image.controller.js');
const createHttpError = require('http-errors');

// define the post images route
router.post('/', (req, res, next) => imageControllers.postImage(req,res,next))

// define the get images route
router.get('/', async (req, res, next) => {
  try {
    const result = await imageModel.find({});;
    res.status(200).json({data: result});
  } catch (error) {
    console.log(error);
    const httpError = createHttpError(500, error);
    // res.status(500).json({ 
		// 	message: 'Getting all images failed! See error in response',
		// 	error: error.message,
		// });
    return next(httpError);
  }
})

module.exports = router