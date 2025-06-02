const express = require("express");
const app = express();
const routes = require("./routes/routes");
const mongoose = require("mongoose");
const rateLimit = require('express-rate-limit');
const xssClean = require('xss-clean');
const cors = require('cors');

// Limit requests from same API
const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000, // 1 hour
    message: 'Too many requests from this IP, please try again in an hour!'
});

const corsOptions = {
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST', "DELETE", "PUT"],    
};

app.use(express.json());
app.use(routes);
app.use(express.static("public"))
app.use(limiter);
app.use(xssClean);
app.use(cors(corsOptions));

mongoose.connect("mongodb://localhost:27017/School_System")
    .then(() => {
        console.log("✅Connected MySql");
        app.listen(3000, () => {
            console.log("🚀server in running on http://localhost:3000");
        })
    })
    .catch(() => console.log("❌Disconnected MySql"))