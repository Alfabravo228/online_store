require('dotenv').config()
const sequelize = require('./db')
const express = require('express')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')


const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)

app.get('/', (request, response) => {
  response.status(200).json({ message: 'WORK' })
})

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () => console.log(`server is OK on ${PORT}`))
  } catch (e) {
    console.log(e)
  }
}

start()