import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import connectToMongo from './db.js'
import route from './routes/route.js'

const app = express()

connectToMongo()

const corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route)

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`App listen at port ${port}`)
})
