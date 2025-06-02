const mongoose = require('mongoose');

const teacherSubjectSectionSchema = new mongoose.Schema({
  teacherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teachers',
    required: true
  },
  subjectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subjects',
    required: true
  },
  sectionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Sections',
    required: true
  }
}, {
  timestamps: true // لتتبع وقت الإنشاء والتحديث
});

// فهرس لضمان عدم تكرار الربط لنفس المعلم، المادة، والشعبة
teacherSubjectSectionSchema.index({ subjectId: 1, sectionId: 1 }, { unique: true });

module.exports = mongoose.model('TeacherSubjectSections', teacherSubjectSectionSchema);