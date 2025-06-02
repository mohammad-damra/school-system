const BaseModel = require("./BaseModel");
const RoleSchema = require("../schemas/RoleSchema");

class RoleModel extends BaseModel {
    constructor() {
        super(RoleSchema);
    }

    async getName(id) {
        return (await RoleSchema.findById(id))?.name;
    }

    async getByName(name) {
        return RoleSchema.findOne({ name: name });
    }
}

module.exports = RoleModel;