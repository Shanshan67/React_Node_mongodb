const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

module.exports={registerUser,loginUser,getMe}