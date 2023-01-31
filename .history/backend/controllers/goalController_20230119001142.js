const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')
const User = require('../models/userModel')

const getGoal=asyncHandler(async(req,res) => {
    const goals= await Goal.find({user:req.user._id})
    res.status(200).json(goals)
})

const setGoal=asyncHandler(async(req,res) => {
    const goals= await Goal.find({user:req.user._id})
    res.status(200).json(goals)
})

const updateGoal =asyncHandler(async(req,res) => {
    const goals= await Goal.find({user:req.user._id})
    res.status(200).json(goals)
})

const deleteGoal =asyncHandler(async(req,res) => {
    const goals= await Goal.find({user:req.user._id})
    res.status(200).json(goals)
})

module.exports={getGoal,setGoal,updateGoal,deleteGoal}