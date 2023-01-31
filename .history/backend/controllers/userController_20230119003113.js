const jwt=require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const registerUser = asyncHandler(async(req,res) => {
    const {name,email,password} = req.body
    if(!name || !email || !password){
        res.status(400)
        throw new Error('all fields')
    }

    const userExist = await User.findOne()
})

const loginUser = asyncHandler(async(req,res) => {
    
})

const getMe = asyncHandler(async(req,res) => {
    
})
module.exports={registerUser,loginUser,getMe}