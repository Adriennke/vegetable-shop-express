const User = require("../models/usersSchema")
const createError = require("http-errors")

const auth = async (req, res, next) => {
    const token = req.header("x-auth")
    // console.log("auth working")

    try {
        const user = await User.findByToken(token)
        if (!user) throw createError(403)

        req.user = user;
        req.token = token;

        next()

    } 
    catch (error) {
        next(error)
    }

}

module.exports = auth;