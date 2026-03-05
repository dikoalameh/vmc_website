const mongoose = require('mongoose');

// We use { strict: false } and a generic Object type because your CMS 
// form has dozens of dynamic fields (arrays, images, text).
// This tells MongoDB to accept whatever JSON object your Vue app sends!
const contentSchema = new mongoose.Schema({
  data: {
    type: Object,
    default: {}
  }
}, { strict: false, timestamps: true });

module.exports = mongoose.model('Content', contentSchema);