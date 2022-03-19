const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, unique: true, required: true },
    description: { type: String },
    tiers: [
      {
        name: { type: String },
        price: { type: Number },
        description: { type: String },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Service", schema);
