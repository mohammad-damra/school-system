const User = require("../schemas/UserSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

class LoginController {
    static async login(req, res) {
        try {
            let user;
            user = await User.findOne({ username: req.body.identifier });
            if (!user)
                user = await User.findOne({ email: req.body.identifier });

            if (!user)
                return res.status(404).json({ message: "user not found" });

            if (!(await bcrypt.compare(req.body.password, user.password))) {
                return res.status(401).json({ message: "Invalid credential" });
            }
            // const token = jwt.sign({ userId: user.userId, roleId: user.roleId }, process.env.JWT_SECRET, { expiresIn: "1h" });
            const token = jwt.sign({ userId: user._id, roleId: user.roleId }, process.env.JWT_SECRET);
            res.json({token});
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: "server error" });
        }
    }
}

module.exports = LoginController;