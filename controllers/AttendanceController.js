const Attendance = require("../models/AttendanceModel");

class AttendanceController {
    static async create(req, res) {
        try {
            let attendance = new Attendance();
            let result = await attendance.create(req.body);
            res.json(result);
        } catch (err) {
            if (err.code === 11000) {
                return res.status(400).json({ message: 'The class already exists for this year' });
            }
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }

    static async view(req, res) {
        try {
            let attendance = new Attendance();
            let result = await attendance.get(req.params.id);
            res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }

    static async index(req, res) {
        try {
            let attendance = new Attendance();
            let result = await attendance.index();
            res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }

    static async update(req, res) {
        try {
            let attendance = new Attendance();
            let result = await attendance.update(req.params.id, req.body);
            res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }

    static async delete(req, res) {
        try {
            let attendance = new Attendance();
            let result = await attendance.delete(req.params.id);
            res.json(result);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }
}

module.exports = AttendanceController;