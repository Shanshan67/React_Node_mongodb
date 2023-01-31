const mongoose=require('mongoose')

const connectDB = async()=>{
    mongoose.set('strictQuery',false)
    const conn = await mongoose.connect()
}

module.exports=connectDB