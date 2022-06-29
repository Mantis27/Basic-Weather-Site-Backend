const User = require("../Models/User")

module.exports = (req, res, next) => {
    User.findById(req.userId, "isAdmin -_id", (err, user) => {
        if(err) res.status(500).send("internal server error");
        if(!user) res.status(404).send("user not found");
        if(!user.isAdmin) res.status(403).send("access to the requested resource is forbidden");
        req.isAdmin = true;
        next();
    });
}