const BaseModel = require("./BaseModel");
const SubmissionSchema = require("../schemas/SubmissionSchema");

class SubmissionModel extends BaseModel {
    constructor() {
        super(SubmissionSchema);
    }
}

module.exports = SubmissionModel;