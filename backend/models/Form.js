const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Form = mongoose.model('Form', formSchema);
module.exports = Form;  // Exporting the model
