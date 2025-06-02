const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const teacherSchema = new mongoose.Schema({
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
  major: {
    type: String,
    required: true
  },
  hireDate: {
    type: Date
  },
  password: {
    type: String,
    required: true
  },
  roleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Roles",
    required: true
  },

}, { timestamps: true });

teacherSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model('Teachers', teacherSchema);


  // sectionIds: [{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Sections'
  // }],
  // subjectIds: [{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Subjects'
  // }],