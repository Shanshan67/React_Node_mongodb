const express=require('express')
const router=require.Router()

app.get('/api/goals', (req,res)=>{
    res.status(200).json({message:'get goals'})
})

module.exports=router