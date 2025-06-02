const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
    assignmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Assignments',
        required: true
    },
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Students',
        required: true
    },
    submittedAt: {
        type: Date,
        default: Date.now
    },
    answer: {
        type: String,
        required: true
    },
    grade: {
        type: Number
    },
    teacherFeedback: {
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model('Submissions', submissionSchema);