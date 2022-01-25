// const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require('../models/user.schema');
const createHttpError = require('http-errors');
const log = require('loglevel');
const mongoose = require('mongoose');

const registerUser = async(req, res, next) => {
  let user;
  if(!req.body.fullName && !req.body.email && !req.body.password) {
    res.status(400).json({errorMessage: " User registration failed: check Full Name, Email & Password parameters"})
  } else{
    try {
    user = new User({
    fullName: req.body.fullName,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
    });
      const result = await user.save();
      res.status(201).json({message: "user created succesfuly with id", result: result})
    // throw new Error("Check parameters: Full name, email and Password");
  } catch (error) {
    if(error.code === 11000){
      res.status(400).json({error: 'duplicate email presented and only one user can have one unique email' });
    } else {
    const httpError = createHttpError(500, error);
    next(httpError);
    }
    }
  }; 
};
//   user.save((err, user) => {
//     if (err) {
//       res.status(500)
//         .send({
//           message: err
//         });
//       return;
//     } else {
//       res.status(200)
//         .send({
//           message: "User Registered successfully"
//         })
//     }
//   });
// };

// exports.signin = (req, res) => {
//   User.findOne({
//       email: req.body.email
//     })
//     .exec((err, user) => {
//       if (err) {
//         res.status(500)
//           .send({
//             message: err
//           });
//         return;
//       }
//       if (!user) {
//         return res.status(404)
//           .send({
//             message: "User Not found."
//           });
//       }

//       //comparing passwords
//       var passwordIsValid = bcrypt.compareSync(
//         req.body.password,
//         user.password
//       );
//       // checking if password was valid and send response accordingly
//       if (!passwordIsValid) {
//         return res.status(401)
//           .send({
//             accessToken: null,
//             message: "Invalid Password!"
//           });
//       }
//       //signing token with user id
//       var token = jwt.sign({
//         id: user.id
//       }, process.env.API_SECRET, {
//         expiresIn: 86400
//       });

//       //responding to client request with user profile success message and  access token .
//       res.status(200)
//         .send({
//           user: {
//             id: user._id,
//             email: user.email,
//             fullName: user.fullName,
//           },
//           message: "Login successfull",
//           accessToken: token,
//         });
//     });
// };

module.exports = {registerUser};