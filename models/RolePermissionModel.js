const BaseModel = require("./BaseModel");
const RolePermissionSchema = require("../schemas/RolePermissionSchema");

class RolePermissionModel extends BaseModel {
    constructor() {
        super(RolePermissionSchema);
    }
}

module.exports = RolePermissionModel;