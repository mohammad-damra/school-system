const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    dataOfBirth: {
        type: Date,
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ["أنثى", "ذكر"]
    },
    phone: {
        type: String,
        required: true
    },
    sectionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Sections",
        required: true
    },
    grades: [{
        subjectId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Subjects"
        },
        score: Number,
        // examType: String
    }],
    roleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Roles",
        required: true
    },
}, { timestamps: true });

studentSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

module.exports = mongoose.model('Students', studentSchema);