const BaseModel = require("./BaseModel");
const GradeSchema = require("../schemas/GradeSchema");

class GradeModel extends BaseModel {
    constructor() {
        super(GradeSchema);
    }
}

module.exports = GradeModel;