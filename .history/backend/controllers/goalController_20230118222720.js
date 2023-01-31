const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')
const User = require('../models/userModel')

module.exports={getGoal,setGoal,updateGoal,deleteGoal}