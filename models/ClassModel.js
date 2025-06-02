const BaseModel = require("./BaseModel");
const ClassSchema = require("../schemas/ClassSchema");

class ClassModel extends BaseModel {
    constructor() {
        super(ClassSchema);
    }
}

module.exports = ClassModel;