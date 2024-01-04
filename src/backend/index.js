const conn = require('./db')
const express = require('express')
const cors = require('cors')

conn()

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

app.use('/api/carts',require('./routes/carts'))
app.use('/api/auth',require('./routes/auth'))


app.listen(port,() => {
    console.log(`App is listening to port:${port}`)
})