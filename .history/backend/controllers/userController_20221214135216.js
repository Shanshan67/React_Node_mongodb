const asyncHandler = require('express-async-handler')
const Goal=require('../models/userModel')

const registerUser = (req,res)=>{
    res.json({message:'register user'})
}

module.exports={registerUser,}