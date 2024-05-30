import express from 'express'
import { addUsers, getUsers } from '../control/usercontrol.js'
import { newConvo } from '../control/convocontrol.js';

const route = express.Router()

// we add all endpoints here

route.post('/add', addUsers)
route.get('/fetch', getUsers)
route.post('/convo/add', newConvo)

export default route