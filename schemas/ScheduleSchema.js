const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  sectionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Sections',
    required: true
  },
  subjectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subjects',
    required: true
  },
  day: {
    type: String,
    enum: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس'],
    required: true
  },
  time: {
    type: TimeRanges,
    required: true
  }
}, { timestamps: true });



module.exports = mongoose.model('Schedules', scheduleSchema);