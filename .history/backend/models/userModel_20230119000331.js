const mongoose = require('mongoose')

const goalSchema=mongoose.Schema({

},{
    timestamps:true
})

module.exports=mongoose.model('Goal',goalSchema)