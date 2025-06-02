const BaseUserModel = require("./BaseUserModel");
const StudentSchema = require("../schemas/StudentSchema");

class StudentModel extends BaseUserModel {
    constructor() {
        super(StudentSchema);
    }

    async count() {
        return StudentSchema.find();
    }
}

module.exports = StudentModel;