const mongoose=require('mongoose')

const connectDB=async() => {
    try {
        mongoose.set("strictQuery",false)
        const conn=await mongoose.connect()
    } catch (error) {
        
    }
}