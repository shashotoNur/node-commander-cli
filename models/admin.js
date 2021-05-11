const mongoose = require('mongoose');

// Schema
const adminSchema = mongoose.Schema(
  {
    firstname: { type: String },
    lastname: { type: String },
    phone: { type: String },
    email: { type: String }
  });

// Define and export
module.exports = mongoose.model('Admin', adminSchema);