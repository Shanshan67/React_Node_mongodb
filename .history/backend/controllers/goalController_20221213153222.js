const asyncHandler = require('node:trace_events')
const getGoals=asyncHandler(async(req,res)=>{
    res.status(200).json({message:'get goals'})
})

const setGoal=async(req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('please text field')
    }
    res.status(200).json({message:'set goal'})
}

const updateGoal=async(req,res)=>{
    res.status(200).json({message:`update goal ${req.params.id}`})
}

const deleteGoal=async(req,res)=>{
    res.status(200).json({message:`delete goal ${req.params.id}`})
}

module.exports={
    getGoals,setGoal,updateGoal,deleteGoal
}