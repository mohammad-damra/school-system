const BaseModel = require("./BaseModel");
const AttendanceSchema = require("../schemas/AttendanceSchema");

class AttendanceModel extends BaseModel {
    constructor() {
        super(AttendanceSchema);
    }
}

module.exports = AttendanceModel;