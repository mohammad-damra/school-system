const TeacherSubjectSection = require("../models/TeacherSubjectSectionModel");

class TeacherSubjectSectionController {
    static async create(req, res) {
        try {
            let teacherSubjectSection = new TeacherSubjectSection();
            let result = await teacherSubjectSection.create(req.body);
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

    static async mySections(req, res) {
        try {
            let teacherSubjectSection = new TeacherSubjectSection();
            let result = await teacherSubjectSection.getByTeacher(req.userId);
            res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }

    static async view(req, res) {
        try {
            let teacherSubjectSection = new TeacherSubjectSection();
            let result = await teacherSubjectSection.get(req.params.id);
            res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }

    static async index(req, res) {
        try {
            let teacherSubjectSection = new TeacherSubjectSection();
            let result = await teacherSubjectSection.index();
            res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }

    static async update(req, res) {
        try {
            let teacherSubjectSection = new TeacherSubjectSection();
            let result = await teacherSubjectSection.update(req.params.id, req.body);
            res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }

    static async delete(req, res) {
        try {
            let teacherSubjectSection = new TeacherSubjectSection();
            let result = await teacherSubjectSection.delete(req.params.id);
            res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }
}

module.exports = TeacherSubjectSectionController;