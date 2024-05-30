import mongoose from "mongoose";

const convoSchema = new mongoose.Schema({
    members: {
        type: Array
    },
    message: {
        type: String
    }},
{
    timestamps: true
})

const Convo = mongoose.model('Message' , convoSchema)
export default Convo