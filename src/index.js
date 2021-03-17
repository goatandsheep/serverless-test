const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

const routes = express.Router({
  mergeParams: true
})

routes.get('/', (req, res) => {
  res.status(200).json({})
})

app.use('/', routes)

module.exports = app
