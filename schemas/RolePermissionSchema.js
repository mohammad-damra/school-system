const mongoose = require("mongoose");

const rolePermissionsSchema = new mongoose.Schema({
    roleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Roles",
        required: true
    },
    permissionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Permissions",
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model("RolePermissions", rolePermissionsSchema);