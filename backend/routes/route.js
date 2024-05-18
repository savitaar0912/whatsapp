import express from 'express'
import { addUsers } from '../control/usercontrol.js'

const route = express.Router()

// we add all endpoints here

route.post('/add',addUsers)

export default route