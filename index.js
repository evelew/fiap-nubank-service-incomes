const express = require('express')
const app = express()
const port = 3001

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const getAll = require('./repository/get-all')

app.get('/income/get-all', async function (req, res) {
  const income = await getAll()
  res.send(income)
})

app.listen(port, function () {
  console.log(`Listening on port ${port}!`)
})
