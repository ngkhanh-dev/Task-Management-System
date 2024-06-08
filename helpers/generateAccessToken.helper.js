module.exports.generateAccessToken = (id) => {
    return jwt.sign(id, process.env.TOKEN_SECRET, { expiresIn: "10s" });
};
