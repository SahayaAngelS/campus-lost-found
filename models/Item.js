const mongoose = require('mongoose');

const claimSchema = new mongoose.Schema(
  {
    name: String,
    contact: String,   // email or phone
    message: String,
  },
  { _id: false, timestamps: true }
);

const itemSchema = new mongoose.Schema(
  {
    itemName: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    imageUrl: { type: String }, // Cloudinary URL
    status: {
      type: String,
      enum: ['lost', 'found'],
      required: true,
    },
    category: { type: String }, // e.g. electronics, documents, etc.
    claims: [claimSchema],      // NEW: list of claims
  },
  { timestamps: true }
);

module.exports = mongoose.model('Item', itemSchema);
