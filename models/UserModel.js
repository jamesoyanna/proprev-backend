const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserModel = new Schema(
    {
      firstName: String,
      lastName: String,
      email: {
        type: String,
        trim: true,
        unique: true,
      },
      status: {
        type: String,
        default: "Pending",
      },
      userId: {
        type: String,
        unique: true,
      },
      password: String,
      role: String,
      expireToken:Date,
    },
    {
      timestamps: true,
    }
  );
  
  module.exports = mongoose.model("users", UserModel);
  