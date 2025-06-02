const Section = require("../models/SectionModel");

class SectionController {
    static async create(req, res) {
        try {
            let section = new Section();
            let result = await section.create(req.body);
            res.json(result);
        } catch (err) {
            // if (err.code === 11000) {
            //     return res.status(400).json({ message: 'الشعبة موجودة بالفعل لهذا الصف في هذه السنة الدراسية' });
            // }
            return res.status(500).json({ message: err.message || 'خطأ في الخادم' });
        }
    }

    static async viewWithSubjects(req, res) {
        try {
            let section = new Section();
            let result = await section.getWithSubjects(req.params.id);
            res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }

    static async view(req, res) {
        try {
            let section = new Section();
            let result = await section.get(req.params.id);
            res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }

    static async index(req, res) {
        try {
            let section = new Section();
            let result = await section.index();
            res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }

    static async update(req, res) {
        try {
            let section = new Section();
            let result = await section.update(req.params.id, req.body);
            res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }

    static async delete(req, res) {
        try {
            let section = new Section();
            let result = await section.delete(req.params.id);
            res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }
}

module.exports = SectionController;