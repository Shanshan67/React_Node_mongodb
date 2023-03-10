const jwt=require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const { generate } = require('@vue/compiler-core')

const generateToken = (id) => {
    return jwt.sign({id},'process.env.JWT_SECRET',{expiresIn:'30d'})
}
const registerUser = asyncHandler(async(req,res) => {
    const {name,email,password} = req.body
    if(!name || !email || !password){
        res.status(400)
        throw new Error('all fields')
    }

    const userExist = await User.findOne({email})
    if(userExist){
        res.status(400)
        throw new Error('user already exists')
    }

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password,salt)
    const user = await User.create({name,email,password:hashPassword})
    if(user){
        res.status(200).json({
            _id:user.id,
            name:user.name,
            email:user.email,
            token:generateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error('invalid user data')
    }
})

const loginUser = asyncHandler(async(req,res) => {
    const {email,password} = req.body
    const user = await User.findOne({email})
    if(user && (await bcrypt.compare(password,user.password))){
        res.status(200).json({
            _id:user.id,
            name:user.name,
            email:user.email,
            token:generateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error('invalid credentials')
    }
})

const getMe = asyncHandler(async(req,res) => {
    const {_id,name,email} = await User.findById(req.user._id)
    res.status(200).json({
        id:_id,
        name,
        email
    })
})
module.exports={registerUser,loginUser,getMe}