const Semester = require("../models/SemesterModel");

class SemesterController {
    static async create(req, res) {
        try {
            let semester = new Semester();
            let result = await semester.create(req.body);
            res.json(result);
        } catch (err) {
            if (err.code === 11000) {
                res.status(400).json({ message: 'الفصل الدراسي موجود مسبقًا في هذه السنة' });
            }
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }

    static async view(req, res) {
        try {
            let semester = new Semester();
            let result = await semester.get(req.params.id);
            res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }

    static async index(req, res) {
        try {
            let semester = new Semester();
            let result = await semester.index();
            res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }

    static async update(req, res) {
        try {
            let semester = new Semester();
            let result = await semester.update(req.params.id, req.body);
            res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }

    static async delete(req, res) {
        try {
            let semester = new Semester();
            let result = await semester.delete(req.params.id);
            res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }
}

module.exports = SemesterController;