const jwt = require("jsonwebtoken") 
//const crypto = require('crypto') 
const  bcrypt = require('bcryptjs') 
const UserModel = require('../models/UserModel');
const ValidateRegister = require("../validation/Register");
require('dotenv').config()

// Register a user
const Register = async (req, res) => {
    const { errors, isValid } = ValidateRegister(req.body);
    try {
        // Validate a user
      if (!isValid) {
        res.status(404).json(errors);
      } else {
         const {email } = req.body;
        UserModel.findOne({ email }).then(async(exist) => {
          if (exist) {
            errors.email = "user already exist";
            res.status(404).json(errors);
          } else {
            const hash = bcrypt.hashSync(req.body.password, 10)//hashed password
            req.body.password = hash;
            req.body.role = "USER";
            const result =  await UserModel.create(req.body);
            const token = jwt.sign({ email: result.email, id: result._id }, process.env.SECRET, { expiresIn: "1h" })
            res.status(200).json({ result, token })
          }
        });
      }
    } catch (error) {
      res.status(404).json(error.message);
    }
  };

module.exports = {
    Register,
    // Login,
  };