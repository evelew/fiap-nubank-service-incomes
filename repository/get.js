const db = require('./_db')

const get = async (_id) => {
  const Income = db.Mongoose.model('income', db.IncomeSchema, 'income')
  const doc = await Income.findOne({
    _id,
  })
    .lean()
    .exec()
  return doc
}

module.exports = get
