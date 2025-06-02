const BaseModel = require("./BaseModel");
const SectionSchema = require("../schemas/SectionSchema");

class SectionModel extends BaseModel {
    constructor() {
        super(SectionSchema);
    }
    
    async getWithSubjects(id) {
        return this.schema.findById(id).populate("subjectIds");
    }
}

module.exports = SectionModel;