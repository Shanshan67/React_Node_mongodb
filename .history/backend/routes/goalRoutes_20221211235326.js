const express=require('express')
const router=express.Router()
const {getGoals} = require('../controllers/goalController')

router.get('/', getGoals)

router.post('/', (req,res)=>{
    
})

router.put('/:id', (req,res)=>{
    
})

router.delete('/:id', (req,res)=>{
    
})

module.exports=router