const Teacher = require("../models/TeacherModel");
const Role = require("../models/RoleModel");

class TeacherController {
    static async create(req, res) {
        try {
            let teacher = new Teacher();
            let role = new Role();
            const roleId = (await role.getByName("teacher"))?._id;
            req.body.roleId = roleId;
            let result = await teacher.create(req.body);
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
            let teacher = new Teacher();
            let result = await teacher.get(req.params.id);
            if (!result)
                return res.status(404).json({ message: "teacher not found" });
            res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }

    static async getMe(req, res) {
        try {
            let teacher = new Teacher();
            let result = await teacher.get(req.userId);
            if (!result)
                return res.status(404).json({ message: "teacher not found" });
            res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }

    static async index(req, res) {
        try {
            let teacher = new Teacher();
            let result = await teacher.index();
            res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }

    static async update(req, res) {
        try {
            let teacher = new Teacher();
            let result = await teacher.update(req.params.id, req.body);
            if (!result)
                return res.json({ message: "The data has not been updated" })
            res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }

    static async updateMe(req, res) {
        try {
            // console.log(req.userId);
            let teacher = new Teacher();
            let result = await teacher.update(req.userId, req.body);
            if (!result)
                return res.json({ message: "The data has not been updated" })
            res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }

    static async delete(req, res) {
        try {
            let teacher = new Teacher();
            let result = await teacher.delete(req.params.id);
            if (!result)
                return res.status(404).json({ message: "teacher not found" });
            res.json({ message: "deleted successfully" });
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }
}

module.exports = TeacherController;