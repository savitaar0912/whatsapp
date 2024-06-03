import Convo from '../model/Convo.js';
import Message from '../model/Message.js';

export const addMessage = async (req, res) => {
    try {
        const newMessage = new Message(req.body)

        await newMessage.save()
        await Convo.findByIdAndUpdate(req.body.conversationId, { message: req.body.text })

        return res.status(200).json('Msg sent succesfully')

    } catch (error) {
        return res.sastus(400).json(error.message)
    }
}

export const getAllMessages = async (req,res) => {
    try {
        const messages = await Message.find({conversationId: req.params.id})
        return res.status(200).json(messages)
    } catch (error) {
        return res.sastus(400).json(error.message)
    }
}