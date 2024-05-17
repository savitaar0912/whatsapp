import express from 'express'
import { addUsers } from '../control/usercontrol.js'

const route = express.Router()

route.post('/add',addUsers)

export default route