const BaseUserModel = require("./BaseUserModel");
const ManagerSchema = require("../schemas/ManagerSchema");

class ManagerModel extends BaseUserModel {
    constructor() {
        super(ManagerSchema);
    }
}

module.exports = ManagerModel;