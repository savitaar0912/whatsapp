import User from '../model/User.js'

export const addUsers = async (req, res) => {
    try {
        const userExist = await User.findOne({ sub: req.body.sub })

        if (userExist) {
            res.status(200).json({ 'msg': 'User already exists' })
            return;
        }

        const newUser = new User(req.body)
        await newUser.save()
        return res.status(100).json(newUser)
    }
    catch(error){
        return res.status(400).json(error.message);
    }
}