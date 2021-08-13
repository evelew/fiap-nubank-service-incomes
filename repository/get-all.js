const db = require('./_db')

const getAll = async () => {
  const Income = db.Mongoose.model('income', db.IncomeSchema, 'income')
  const docs = await Income.find({}).lean().exec()
  return docs
}

module.exports = getAll
