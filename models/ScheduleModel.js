const BaseModel = require("./BaseModel");
const ScheduleSchema = require("../schemas/ScheduleSchema");

class ScheduleModel extends BaseModel {
    constructor() {
        super(ScheduleSchema);
    }
}

module.exports = ScheduleModel;