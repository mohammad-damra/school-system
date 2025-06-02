const Manager = require("../models/ManagerModel");
const Role = require("../models/RoleModel");

class ManagerController {
    static async create(req, res) {
        try {
            let manager = new Manager();
            let role = new Role();
            const roleId = (await role.getByName("super admin"))?._id;
            req.body.roleId = roleId;
            let result = await manager.create(req.body);
            res.json(result);
        } catch (err) {
            if (err.code == 11000)
                return res.status(400).json({ message: "duplicate key" });
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }

    static async view(req, res) {
        try {
            let manager = new Manager();
            let result = await manager.get(req.params.id);
            if (!result)
                return res.status(404).json({ message: "manager not found" });
            res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }

    static async index(req, res) {
        try {
            let manager = new Manager();
            let result = await manager.index();
            res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }

    static async update(req, res) {
        try {
            let manager = new Manager();
            let result = await manager.update(req.params.id, req.body);
            res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }

    static async delete(req, res) {
        try {
            let manager = new Manager();
            let result = await manager.delete(req.params.id);
            if (!result)
                return res.status(404).json({ message: "manager not found" });
            res.json({ message: "deleted successfully" });
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }
}

module.exports = ManagerController;