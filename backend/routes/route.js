import express from 'express'
import { addUsers, getUsers } from '../control/usercontrol.js'
import { getConvo, newConvo } from '../control/convocontrol.js';
import { addMessage, getAllMessages } from '../control/messagecontrol.js';

const route = express.Router()

// we add all endpoints here

route.post('/add', addUsers)
route.get('/fetch', getUsers)

route.post('/convo/add', newConvo)
route.post('/convo/get', getConvo)

route.post('/message/add', addMessage)
route.get('/message/get/:id' , getAllMessages)


export default route