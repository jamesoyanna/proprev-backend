const jwt = require("jsonwebtoken") 
const  bcrypt = require('bcryptjs') 
const UserModel = require('../models/UserModel');
const ValidateRegister = require("../validation/Register");
const ValidateLogin = require("../validation/Login");
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

  // Login a User
  const Login = async (req, res)=> {
    const {errors, isValid} = ValidateLogin(req.body);
    try {
      if(!isValid){
        res.status(404).json(errors)
       }else{
        const { email, password } = req.body //Coming from form input
        const existingUser =  await UserModel.findOne({ email }) 
        if(!existingUser) return res.status(404).json({ message: "User doesn't exist" })
        const isPasswordCorrect  = await bcrypt.compare(password, existingUser.password)
        if(!isPasswordCorrect) return res.status(400).json({message: "Incorrect email or password"})
        //If crednetials are valid, create a token for the user
        const token = jwt.sign({  id: existingUser._id, name: existingUser.name ,email: existingUser.email, role: existingUser.role}, process.env.SECRET,  { expiresIn: '24h' });
        //Then send the token to the frontend
        res.status(200).json({ result: existingUser, token })
       }
    } catch (error) {
      res.status(404).json(error.message);
    }
  }



   
module.exports = {
    Register,
     Login,
  };