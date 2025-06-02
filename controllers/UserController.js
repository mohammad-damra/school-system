const User = require("../models/UserModel");
const Role = require("../models/RoleModel");

class UserController {
    static async create(req, res) {
        try {
            let user = new User();
            let result = await user.create(req.body);
            res.json(token);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }

    static async view(req, res) {
        try {
            let user = new User();
            let result = await user.get(req.params.id);
            res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }

    static async index(req, res) {
        try {
            let user = new User();
            let role = new Role();
            let result = await user.index();
            let newResult = await Promise.all(result.map(async item => {
                let user = item.toObject();
                user["roleName"] = await role.getName(user.roleId);
                return user;
            }));
            res.json(newResult);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }

    static async update(req, res) {
        try {
            let user = new User();
            let result = await user.update(req.params.id, req.body);
            res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }

    static async delete(req, res) {
        try {
            let user = new User();
            let result = await user.delete(req.params.id);
            res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }
}

module.exports = UserController;