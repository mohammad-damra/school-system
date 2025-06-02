const AcademicYear = require("../models/AcademicYearModel");

class AcademicYearController {
    static async create(req, res) {
        try {
            let academicYear = new AcademicYear();
            let result = await academicYear.create(req.body);
            res.json(result);
        } catch (err) {
            if (err.code === 11000) {
                return res.status(400).json({ message: 'السنة الدراسية موجودة بالفعل' });
            }
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }

    static async view(req, res) {
        try {
            let academicYear = new AcademicYear();
            let result = await academicYear.get(req.params.id);
            res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }

    static async index(req, res) {
        try {
            let academicYear = new AcademicYear();
            let result = await academicYear.index();
            res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }

    static async update(req, res) {
        try {
            let academicYear = new AcademicYear();
            let result = await academicYear.update(req.params.id, req.body);
            res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }

    static async delete(req, res) {
        try {
            let academicYear = new AcademicYear();
            let result = await academicYear.delete(req.params.id);
            res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }
}

module.exports = AcademicYearController;
