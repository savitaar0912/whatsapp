import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD

const mongoURI = `mongodb+srv://${username}:${password}@gglaccdetails.n2wazy9.mongodb.net/`

export const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI,{ useNewUrlParser: true, useUnifiedTopology: true })
        console.log("Connection successful to DB")
    } catch (error) {
        console.log("Errror in mongoose connection", error.message)
        process.exit(1)
    }
}

export default connectToMongo