const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    username: { type: String },
    email: { type: String },
    address: { type: String },
    country: { type: String },
    state: { type: String },
    zip: { type: String },
    sameAddress: { type: String },
    saveInfo: { type: String },
    paymentMethod: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Checkout", schema);
