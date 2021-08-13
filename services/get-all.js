const getAll = require('./../repository/get-all')

module.exports = async () => {
  const income = await getAll()
  return income
}
