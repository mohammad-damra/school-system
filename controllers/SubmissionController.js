const Submission = require("../models/SubmissionModel");

class SubmissionController {

    static async createWithFile(req, res) {
        try {
            req.body.answer = req.file.path; // حفظ مسار الملف في قاعدة البيانات
            await SubmissionController.create(req, res);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: "server error" });
        }
    }
    
    static async getMySubmissions(req, res) {
        try {
            const submission = new Submission();
            const result = await submission.schema.find({ studentId: req.userId });
            res.json(result);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: "server error" });
        }
    }

    static async getByAssignment(req, res) {
        try {
            const submission = new Submission();
            const result = await submission.schema.find({ assignmentId: req.params.assignmentId });
            res.json(result);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: "server error" });
        }
    }

    static async submit(req, res) {
        try {
            const submission = new Submission();
            const body = {
                assignmentId: req.body.assignmentId,
                studentId: req.userId,
                answer: req.file?.path,
            };

            if (!body.assignmentId || !body.answer) {
                return res.status(400).json({ message: "Missing required data." });
            }

            const result = await submission.create(body);
            res.json(result);
        } catch (err) {
            console.error("Submission error:", err);
            res.status(500).json({ message: "Server error" });
        }
    }

    static async create(req, res) {
        try {
            let submission = new Submission();
            let result = await submission.create(req.body);
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
            let submission = new Submission();
            let result = await submission.get(req.params.id);
            res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }

    static async index(req, res) {
        try {
            let submission = new Submission();
            let result = await submission.index();
            res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }

    static async update(req, res) {
        try {
            let submission = new Submission();
            let result = await submission.update(req.params.id, req.body);
            res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }

    static async delete(req, res) {
        try {
            let submission = new Submission();
            let result = await submission.delete(req.params.id);
            res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }
}

module.exports = SubmissionController;