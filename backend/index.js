import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import connectToMongo from './db.js'
import routes from '../backend/routes/routes.js'

const app = express()

connectToMongo()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/',routes)

const port = 5000

app.listen(port , () => {
    console.log(`App listen at port ${port}`)
})
