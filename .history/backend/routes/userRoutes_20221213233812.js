const express=require('express')
const router=express.Router()
const {registerUser}=require('../controllers/userController')

router.post('/',registerUser)
//router.route('/:id').put(updateGoal).delete(deleteGoal)

module.exports=router