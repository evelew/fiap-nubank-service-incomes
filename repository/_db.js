const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/fiap_nubank_income')

const incomeSchema = new mongoose.Schema(
  {
    name: String,
    cdi_percentage: Number,
    due_date: String,
  },
  { collection: 'income' }
)

module.exports = { Mongoose: mongoose, IncomeSchema: incomeSchema }
