const express = require('express')
const cors = require('cors')
const db = require('./models')
const authController = require('./controllers/AuthController')
const menuController = require('./controllers/MenuController')
const response = require('./middlewares/response')
const path = require('path')

const app = express()

app.use(cors())
app.use(response)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))

app.use('/auth', authController)
app.use('/menu', menuController)

app.get('/', (req, res) => {
  return res.json('OK')
})

module.exports = app
