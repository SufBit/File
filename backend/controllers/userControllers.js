const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const registerUser = async (req, res) => {
    const { name, email, password, pic} = req.body;

    const userExists = await userFindone({ email });
  
    res.json({
      name,
      email,
      message: "User registration successful!",
    });
};

module.exports = registerUser; 