const mongoose=require('mongoose')

const connectDB = async()=>{
    try {
        mongoose.set("strictQuery", false)
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            //must add in order to not get any error masseges:
            useUnifiedTopology:true,
            useNewUrlParser: true,
            useCreateIndex: true
        })

        console.log(`mongodb connected:${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(`Error: ${error} `)
        process.exit(1)
    }
}

module.exports=connectDB