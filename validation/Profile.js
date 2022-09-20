const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateProfile(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.phoneNumber = !isEmpty(data.phoneNumber) ? data.phoneNumber: "";
  data.businessName = !isEmpty(data.businessName) ? data.businessName : "";
  data.address = !isEmpty(data.address) ? data.address : "";

  if (validator.isEmpty(data.tel)) {
    errors.name = "Name is required";
  }
 
  if (validator.isEmpty(data.email)) {
    errors.email = "Email is required";
  }

  if (validator.isEmpty(data.phoneNumber)) {
    errors.phoneNumber = "Phone number is required";
  }
  if (validator.isEmpty(data.businessName)) {
    errors.businessName = "Business name is required";
  }
  if (validator.isEmpty(data.address)) {
    errors.address = "Address is required";
  }
 

  return {
      errors,
      isValid: isEmpty(errors)
  }
};
