const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    subjectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subjects', required: true },
    sectionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Sections', required: true },
    teacherId: { type: mongoose.Schema.Types.ObjectId, ref: 'Teachers', required: true },
    dueDate: { type: Date, required: true },
    maxPoints: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Assignments', assignmentSchema);