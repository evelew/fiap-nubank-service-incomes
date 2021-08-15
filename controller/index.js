const getAll = require('./../services/get-all')
const getIncome = require('./../services/get')

module.exports = (express) => {
  let api = express.Router()

  api.get('/income/get-all', async function (req, res) {
    const incomes = await getAll()
    res.send(incomes)
  })

  api.get('/income/get/:id', async function (req, res) {
    const id = req.params.id
    const income = await getIncome(id)
    res.send(income)
  })

  return api
}
