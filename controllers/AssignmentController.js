const Assignment = require("../models/AssignmentModel");

class AssignmentController {


    static async getForMySection(req, res) {
        try {
            const assignment = new Assignment();

            // افترض أنك تحصل على sectionId من الطالب
            const student = await new (require("../models/StudentModel"))().schema.findOne({ userId: req.userId });

            if (!student)
                return res.status(404).json({ message: "الطالب غير موجود" });

            const result = await assignment.schema.find({ sectionId: student.sectionId });
            res.json(result);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: "حدث خطأ في الخادم" });
        }
    }


    static async create(req, res) {
        try {
            let assignment = new Assignment();
            let result = await assignment.create(req.body);
            res.json(result);
        } catch (err) {
            if (err.name == "ValidationError")
                return res.status(400).json({ message: "The entered value is not allowed." });
            if (err.code == 11000)
                return res.status(400).json({ message: "duplicate key" });
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }

    static async view(req, res) {
        try {
            let assignment = new Assignment();
            let result = await assignment.get(req.params.id);
            res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }

    static async index(req, res) {
        try {
            let assignment = new Assignment();
            let result = await assignment.index();
            res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }

    static async update(req, res) {
        try {
            let assignment = new Assignment();
            let result = await assignment.update(req.params.id, req.body);
            res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }

    static async delete(req, res) {
        try {
            let assignment = new Assignment();
            let result = await assignment.delete(req.params.id);
            res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }
}

module.exports = AssignmentController;