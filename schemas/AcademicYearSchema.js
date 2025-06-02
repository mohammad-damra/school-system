const mongoose = require('mongoose');

const academicYearsSchema = new mongoose.Schema({
  year: {
    type: String,
    required: true,
    unique: true
  }
}, { timestamps: true });

module.exports = mongoose.model('AcademicYears', academicYearsSchema);