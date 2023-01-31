const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')
const User = require('../models/userModel')

const getGoals =asyncHandler(async(req,res) => {
    const goals = await Goal.find({user:req.user._id})
    res.status(200).json(goals)
})

const setGoal =asyncHandler(async(req,res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('please text field')
    }
    const goal = await Goal.create({
        text:req.body.text,
        user:req.user._id
    })
    res.status(200).json(goal)
})

const updateGoal =asyncHandler(async(req,res) => {
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('goal not found')
    }
    const user = await User.findById(req.user.id)
    if(!user){
        res.status(401)
        throw new Error('user not found')
    }
    if(goal.user.toString()!==user.id){
        res.status(401)
        throw new Error('user not authorized')
    }
    const updateGoal = await Goal.findByIdAndUpdate
    res.status().json()
})

const getGoal =asyncHandler(async(req,res) => {
    const goal = await Goal.find({user:req.user._id})
    res.status().json()
})

module.exports={getGoals,setGoal,updateGoal,}