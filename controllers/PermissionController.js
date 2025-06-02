const Permission = require("../models/PermissionModel");

class PermissionController {
    static async create(req, res) {
        try {
            let permission = new Permission();
            let result = await permission.create(req.body);
            res.json(result);
        } catch (err) {
            if (err.code)
                return res.status(500).json({ message: err.codeName });
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }

    static async view(req, res) {
        try {
            let permission = new Permission();
            let result = await permission.get(req.params.id);
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
            let permission = new Permission();
            let result = await permission.index();
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
            let permission = new Permission();
            let result = await permission.update(req.params.id, req.body);
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
            let permission = new Permission();
            let result = await permission.delete(req.params.id);
            res.json(result);
        } catch (err) {
            if (err.code)
                return res.status(500).json({ message: err.codeName });
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }
}

module.exports = PermissionController;