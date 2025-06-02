const Student = require("../models/StudentModel");
const Role = require("../models/RoleModel");

class StudentController {
    static async me(req, res) {
        try {
            const studentModel = new Student();

            // ✅ عُدّل هنا للبحث باستخدام _id وليس userId
            const student = await studentModel.schema.findById(req.userId);

            if (!student) {
                return res.status(404).json({ message: "لم يتم العثور على بيانات الطالب" });
            }

            res.json(student);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: "حدث خطأ في الخادم" });
        }
    }
    
    static async create(req, res) {
        try {
            let student = new Student();
            let role = new Role();
            const roleId = (await role.getByName("student"))?._id;
            req.body.roleId = roleId;
            let result = await student.create(req.body);
            res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }

    static async view(req, res) {
        try {
            let student = new Student();
            let result = await student.get(req.params.id);
            res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }

    static async getMe(req, res) {
        try {
            let student = new Student();
            let result = await student.get(req.userId);
            res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }

    static async index(req, res) {
        try {
            let student = new Student();
            let result = await student.index();
            res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }

    static async update(req, res) {
        try {
            let student = new Student();
            let result = await student.update(req.params.id, req.body);
            res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }

    static async delete(req, res) {
        try {
            let student = new Student();
            let result = await student.delete(req.params.id);
            res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }

    static async count(req, res) {
        try {
            let student = new Student();
            let result = await student.count();
            res.json({ count: result.length });
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }
}

module.exports = StudentController;