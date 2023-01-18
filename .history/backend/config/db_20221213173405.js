const mongoose=require('mongoose')

const connectDB = async()=>{
    try {
        mongoose.set("strictQuery", false)
        const conn = await mongoose.connect("mongodb+srv://bradt1234:1234@traversycluster.nsotvv2.mongodb.net/mernapp?retryWrites=true&w=majority"
            //useCreateIndex: true  process.env.MONGO_URI
        )

        console.log(`mongodb connected:${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(`Error: ${error} `)
        process.exit(1)
    }
}

module.exports=connectDB