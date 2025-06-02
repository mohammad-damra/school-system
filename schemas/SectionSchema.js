const mongoose = require('mongoose');

const sectionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    enum: ['أ', 'ب', 'ج', 'د']
  },
  classId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Classes',
    required: true
  },
  semesterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Semesters',
    required: true
  },
  academicYearId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'AcademicYears',
    required: true
  },
  teacherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teachers",
    required: true,
    unique: true
  },
  subjectIds: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subjects"
  }]
}, { timestamps: true });

sectionSchema.index({ name: 1, classId: 1, academicYearId: 1, semesterId: 1 }, { unique: true });

module.exports = mongoose.model('Sections', sectionSchema);