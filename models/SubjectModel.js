const BaseModel = require("./BaseModel");
const SubjectSchema = require("../schemas/SubjectSchema");

class SubjectModel extends BaseModel {
    constructor() {
        super(SubjectSchema);
    }
}

module.exports = SubjectModel;