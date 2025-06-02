const Role = require("../models/RoleModel");

class RoleController {
    static async create(req, res) {
        try {
            let role = new Role();
            let result = await role.create(req.body);
            res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }

    static async view(req, res) {
        try {
            let role = new Role();
            let result = await role.get(req.params.id);
            res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }

    static async index(req, res) {
        try {
            let role = new Role();
            let result = await role.index();
            res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }

    static async update(req, res) {
        try {
            let role = new Role();
            let result = await role.update(req.params.id, req.body);
            res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }

    static async delete(req, res) {
        try {
            let role = new Role();
            let result = await role.delete(req.params.id);
            res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }
}

module.exports = RoleController;