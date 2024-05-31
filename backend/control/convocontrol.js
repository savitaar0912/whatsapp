
import Convo from '../model/Convo.js'

export const newConvo = async (req, res) => {
    try {

        const senderId = req.body.senderId
        const receiverId = req.body.receiverId

        const exists = await Convo.findOne({ members: { $all: [receiverId, senderId] } })

        if (exists) {
            return res.status(200).json("Convo already exists")
        }

        const newConvo = new Convo({
            members: [senderId, receiverId]
        })

        await newConvo.save()
        return res.status(200).json("New Convo started")

    } catch (error) {
        return res.status(400).json(error.message);
    }
}