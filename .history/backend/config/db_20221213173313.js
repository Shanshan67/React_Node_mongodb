const mongoose=require('mongoose')

const connectDB = async()=>{
    try {
        mongoose.set("strictQuery", false)
        const conn = await mongoose.connect(,{
            //must add in order to not get any error masseges:
            useUnifiedTopology:true,
            useNewUrlParser: true,
            //useCreateIndex: true  process.env.MONGO_URI
        })

        console.log(`mongodb connected:${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(`Error: ${error} `)
        process.exit(1)
    }
}

module.exports=connectDB