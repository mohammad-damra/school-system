const Manager = require("../models/ManagerModel");
const Teacher = require("../models/TeacherModel");
const Student = require("../models/StudentModel");
const Role = require("../models/RoleModel");

class DashboardController {
    static async view(req, res) {
        try {
            let manager = new Manager();
            let student = new Student();
            let teacher = new Teacher();

            let user = await manager.get(req.userId);
            if (!user)
                user = await teacher.get(req.userId);
            if (!user)
                user = await student.get(req.userId);

            let role = new Role();
            let roleName = (await role.get(req.roleId)).name;

            if (roleName == "student") {
                return res.json({ name: user.name, role: roleName, userId: req.userId,  sectionId: user.sectionId});
            }

            res.json({ name: user.name, role: roleName, userId: req.userId });
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }
}

module.exports = DashboardController;