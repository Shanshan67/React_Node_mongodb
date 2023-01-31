const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')
const User = require('../models/userModel')

const getGoal=asyncHandler(async(req,res) => {
    const goals= await Goal.find({})
})

module.exports={getGoal,setGoal,updateGoal,deleteGoal}