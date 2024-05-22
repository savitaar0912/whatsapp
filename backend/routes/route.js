import express from 'express'
import { addUsers , getUsers } from '../control/usercontrol.js'

const route = express.Router()

// we add all endpoints here

route.post('/add',addUsers)
route.get('/fetch' , getUsers)

export default route