const Router = require("express").Router()

const {
    getUsers,
    getUserById,
    postUser,
    putUser,
    deleteUser
} = require("../controllers/usersController")

Router.get("/", getUsers)

Router.get("/", getUserById)

Router.post("/", postUser)

Router.put("/:id", putUser)

Router.delete("/:id", deleteUser)

module.exports = Router;