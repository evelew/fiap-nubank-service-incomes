const getAll = require('./../services/get-all')

module.exports = (express) => {
  let api = express.Router()

  api.get('/income/get-all', async function (req, res) {
    const income = await getAll()
    res.send(income)
  })

  return api
}
