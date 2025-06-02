const mongoose = require('mongoose');

const semesterSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      enum: ['الفصل الأول', 'الفصل الثاني']
    },
    academicYearId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'AcademicYear',
      required: true
    }
  },
  { timestamps: true }
);

// تعريف الفهرس الفريد هنا
semesterSchema.index({ name: 1, academicYearId: 1 }, { unique: true });

module.exports = mongoose.model('Semesters', semesterSchema);