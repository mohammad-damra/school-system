const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {
    let token = req.header('Authorization')?.replace("Bearer ", "");
    
    if (!token) 
        return res.status(401).json({ message: 'No token, authorization denied' });
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        req.roleId = decoded.roleId;
        next();
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'server error' });
    }
}
