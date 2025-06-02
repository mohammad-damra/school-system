const BaseModel = require("./BaseModel");
const PermissionSchema = require("../schemas/PermissionSchema");

class PermissionModel extends BaseModel {
    constructor() {
        super(PermissionSchema);
    }
}

module.exports = PermissionModel;