const RolePermissionSchema = require("../schemas/RolePermissionSchema");
const PermissionSchema = require("../schemas/PermissionSchema");
const RoleSchema = require("../schemas/RoleSchema");

module.exports = (permissionName) => async (req, res, next) => {
    try {
        return next();
        if ((await RoleSchema.findById(req.roleId)).name == "super admin")
            return next();
        const rolePermissions = await RolePermissionSchema.find({ roleId: req.roleId });
        const permissions = await Promise.all(rolePermissions.map(rp => PermissionSchema.findById(rp.permissionId)));
        const hasPermission = permissions.some(p => p.name == permissionName);
        if (!hasPermission)
            return res.status(403).json({ message: "Access denied: Permission not granted." });
        next();
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error." });
    }
}