const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Students',
    required: true
  },
  subjectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subjects',
    required: true
  },
  // teacherId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Teachers',
  //   required: true
  // },
  sectionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Sections',
    required: true
  },
  grade: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  },
  term: {
    type: String,
    enum: ['التقويم الأول', 'التقويم الثاني', "التقويم الثالث", "التقويم النهائي"],
    required: true
  },
}, { timestamps: true });

gradeSchema.index({ studentId: 1, subjectId: 1, sectionId: 1, term: 1 }, { unique: true });

module.exports = mongoose.model('Grades', gradeSchema);