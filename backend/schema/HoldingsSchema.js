const { Schema } = require("mongoose");

const HoldingsSchema = new Schema({
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  dayStartPrice: Number,
});

module.exports = { HoldingsSchema };