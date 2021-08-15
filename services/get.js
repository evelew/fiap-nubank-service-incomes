const get = require('./../repository/get')

module.exports = async (id) => {
  const income = await get(id)
  return income
}
