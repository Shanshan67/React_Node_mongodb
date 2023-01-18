const express=require('express')
const router=express.Router()
const {registerUser}=require('../controllers')

router.post('/',registerUser)

module.exports=router