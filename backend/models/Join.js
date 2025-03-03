const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const joinSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true }, // Changed from Number to String
  address: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Join = mongoose.model('Join', joinSchema);
module.exports = Join; // Correct export
