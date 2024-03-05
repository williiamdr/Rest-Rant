require('dotenv').config()
const express = require('express')
const app = express()

app.use('/places', require('./Controllers/places'))

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})
const PORT = process.env.PORT
app.listen(process.env.PORT)
