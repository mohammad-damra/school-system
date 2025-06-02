const Subject = require("../models/SubjectModel");

class SubjectController {
    static async create(req, res) {
        try {
            let subject = new Subject();
            let result = await subject.create(req.body);
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
            let subject = new Subject();
            let result = await subject.get(req.params.id);
            res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }

    static async index(req, res) {
        try {
            let subject = new Subject();
            let result = await subject.index();
            res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }

    static async update(req, res) {
        try {
            let subject = new Subject();
            let result = await subject.update(req.params.id, req.body);
            res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }

    static async delete(req, res) {
        try {
            let subject = new Subject();
            let result = await subject.delete(req.params.id);
            res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }
}

module.exports = SubjectController;