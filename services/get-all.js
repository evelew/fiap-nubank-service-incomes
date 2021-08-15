const getAll = require('./../repository/get-all')

module.exports = async () => {
  const incomes = await getAll()
  return incomes
}
