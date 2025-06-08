const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 5000;
const cors = require('cors')


const mongoUrl = 'mongodb://localhost:27017/practiceSet'

app.use(express.json())
app.use(cors())

mongoose.connect(mongoUrl)
  .then(() => console.log(`DB connected successfully`))
  .catch(err => console.error('Failed to connect to DB:', err))

const userRouter = require('./Routers/userRouter')

app.use('/user', userRouter)


app.listen(port, () => {
  console.log(`Server running on ${port}`);
})








