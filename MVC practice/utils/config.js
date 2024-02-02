import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

export const dbConnection = async() => {
    try{
        const connectDB = await mongoose.connect(process.env.MONGODB_URI)
        console.log("Database Connect!!")
    } catch(error) {
        console.log(error)
    }
}
