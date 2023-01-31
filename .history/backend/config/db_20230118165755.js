const mongoose=require('mongoose')

const connectDB=async() => {
    try {
        mongoose.set("strictQuery",false)
        const conn=await mongoose.connect("mongodb+srv://bradt1234:<password>@traversycluster.nsotvv2.mongodb.net/?retryWrites=true&w=majority")
    } catch (error) {
        
    }
}