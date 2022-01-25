const dateUtility = require('../utils/dateTimeUtility.js');
const imageModel = require('../models/image.schema.js');
const createHttpError = require("http-errors");

const postImage = async(req, res, next) => {
  const localDateUtil = new dateUtility.localDate();
  const newImage = new imageModel({
    cloudinaryURL: req.body.imageUrl,
    dateUploaded: localDateUtil.getCurrentDate(),
  })
  try {
    if(req.body.imageUrl) {
      const result = await newImage.save()
      console.log(result);
      res.status(201).json({createdData: result});
    }
    throw new Error("no image Url passed")
  }
  catch(error) {
    const httpError = createHttpError(500, error);
    return next(httpError, {});
  }
}

const getImage = async(req, res,next) => {
  try {
    const result = await imageModel.find({});;
    res.status(200).json({data: result});
  } catch (error) {
    console.log(error);
    const httpError = createHttpError(500, error);
    return next(httpError);
  }
}

module.exports = {postImage, getImage};