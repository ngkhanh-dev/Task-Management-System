const User = require("../models/user.model");

module.exports.requireAuth = async (req, res, next) => {
    console.log(req.headers);
    console.log(req.headers.authorization);
    if (!req.headers.authorization) {
        res.json({
            code: 400,
            message: "Vui lòng gửi kèm token",
        });
        return;
    }

    const token = req.headers.authorization.split(" ")[1];
    console.log(req.headers.authorization);
    console.log(req.headers.authorization.split(" "));
    const user = await User.findOne({
        token: token,
        deleted: false,
    }).select("fullName email");

    if (!user) {
        res.json({
            code: 400,
            message: "Token không hợp lệ",
        });
        return;
    }

    res.locals.user = user;

    next();
};
