const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')


require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI

mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
.catch((err => {
    console.log(err)
}))

const connection = mongoose.connection
connection.once('open', () => {
    console.log('mongodb connection established successfully')
})

const exerciseRouter = require('./Routes/Exercise')
const usersRouter = require('./Routes/Users')
app.use('/exercises', exerciseRouter)
app.use('/users', usersRouter)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})