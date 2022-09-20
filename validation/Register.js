const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateRegister(data) {
  let errors = {};

  data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
   data.confirm = !isEmpty(data.confirm) ? data.confirm : "";

  if (validator.isEmpty(data.firstName)) {
    errors.firstName = "Name is required";
  }
  if (validator.isEmpty(data.lastName)) {
    errors.lastName = "Last Name is required";
  }
 
  if (!validator.isEmail(data.email)) {
    errors.email = "Required format email";
  }
  if (validator.isEmpty(data.email)) {
    errors.email = "Email is required";
  }
  if (validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  }
  if(!validator.equals(data.password, data.confirm)){
    errors.confirm = "Password does not match";
  }
  if (validator.isEmpty(data.confirm)) {
    errors.confirm = "Confirm password is required";
  }

  return {
      errors,
      isValid: isEmpty(errors)
  }
};
