const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    enum: ["العلوم", "الرياضيات", "العربي", "الانجليزي", "الرياضة", "الفن", "المهني", "التربية الاسلامية", "اجتماعيات", "جغرافيا", "وطنية", "تاريخ"]
  },
}, { timestamps: true });

module.exports = mongoose.model('Subjects', subjectSchema);