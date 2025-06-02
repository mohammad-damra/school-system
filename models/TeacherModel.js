const BaseUserModel = require("./BaseUserModel");
const TeacherSchema = require("../schemas/TeacherSchema");

class TeacherModel extends BaseUserModel {
    constructor() {
        super(TeacherSchema);
    }
}

module.exports = TeacherModel;