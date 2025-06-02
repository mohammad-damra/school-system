const BaseModel = require("./BaseModel");
const SemesterSchema = require("../schemas/SemesterSchema");

class SemesterModel extends BaseModel {
    constructor() {
        super(SemesterSchema);
    }
}

module.exports = SemesterModel;