const express=require('express')
const router=require.Router()

router.get('/', (req,res)=>{
    res.status(200).json({message:'get goals'})
})

module.exports=router