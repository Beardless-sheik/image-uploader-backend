const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/user.controller');
const userModel = require('../models/user.schema.js');

// define the register route to create a user
router.post('/register', (req, res, next) => userControllers.registerUser(req,res,next))

// define the get images route
router.get('/', (req, res, next) => res.status(200).json({ message: "GET operation works on /api/users" })
); 

module.exports = router