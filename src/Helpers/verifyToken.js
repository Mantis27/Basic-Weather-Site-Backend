const jwt = require("jsonwebtoken");
const config = require("../Config/config");

module.exports = (req, res, next) => {
    const token = req.headers["x-auth-token"];
    if(!token) {
        res.status(403).send({auth: false, message: "No token provided"});
    }

    jwt.verify(token, config.privateKey, (err, decoded) => {
        if(err) res.status(500).send({auth: false, message: "Failed to authenticate token"});
        req.userId = decoded.id;
        next();
    });
}
