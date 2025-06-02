const BaseModel = require("./BaseModel");
const AcademicYearSchema = require("../schemas/AcademicYearSchema");

class AcademicYearModel extends BaseModel {
    constructor() {
        super(AcademicYearSchema);
    }
}

module.exports = AcademicYearModel;