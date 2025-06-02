const BaseModel = require("./BaseModel");
const UserSchema = require("../schemas/UserSchema");

class UserModel extends BaseModel {
    constructor() {
        super(UserSchema);
    }
}

module.exports = UserModel;