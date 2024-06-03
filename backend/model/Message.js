import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderId: {
        type: String
    },
    receiverId: {
        type: String
    },
    conversationId: {
        type: String
    },
    type: {
        type: String
    },
    text: {
        type: String
    }
}, {
    timestamps: true
})

const Message = new mongoose.model('Message', messageSchema)
export default Message