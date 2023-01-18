const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User=require('../models/userModel')

const registerUser = async(req,res)=>{
    res.json({message:'register user'})
}
const loginUser = (req,res)=>{
    res.json({message:'login user'})
}
const getMe = (req,res)=>{
    res.json({message:'user data'})
}

module.exports={registerUser,loginUser,getMe}