const RolePermission = require("../models/RolePermissionModel");

class RolePermissionController {
    static async create(req, res) {
        try {
            let rolePermission = new RolePermission();
            let result = await rolePermission.create(req.body);
            res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }

    static async view(req, res) {
        try {
            let rolePermission = new RolePermission();
            let result = await rolePermission.get(req.params.id);
            res.json(result);
        } catch (err) {
            if (err.code)
                return res.status(500).json({ message: err.codeName });
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }

    static async index(req, res) {
        try {
            let rolePermission = new RolePermission();
            let result = await rolePermission.index();
            res.json(result);
        } catch (err) {
            if (err.code)
                return res.status(500).json({ message: err.codeName });
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }

    static async update(req, res) {
        try {
            let rolePermission = new RolePermission();
            let result = await rolePermission.update(req.params.id, req.body);
            res.json(result);
        } catch (err) {
            if (err.code)
                return res.status(500).json({ message: err.codeName });
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }

    static async delete(req, res) {
        try {
            let rolePermission = new RolePermission();
            let result = await rolePermission.delete(req.params.id);
            res.json(result);
        } catch (err) {
            if (err.code)
                return res.status(500).json({ message: err.codeName });
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }
}

module.exports = RolePermissionController;