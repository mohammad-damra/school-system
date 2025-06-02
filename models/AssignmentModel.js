const BaseModel = require("./BaseModel");
const AssignmentSchema = require("../schemas/AssignmentSchema");

class AssignmentModel extends BaseModel {
    constructor() {
        super(AssignmentSchema);
    }
}

module.exports = AssignmentModel;