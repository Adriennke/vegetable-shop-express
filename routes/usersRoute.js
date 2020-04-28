const Router = require("express").Router()

const {
    getUsers,
    getUserById,
    postUser,
    putUser,
    deleteUser
} = require("../controllers/usersController")
const { validateInput } = require("../middleware/validator")

Router.get("/", getUsers)

Router.get("/", getUserById)

Router.post("/", validateInput(), postUser)

Router.put("/:id", putUser)

Router.delete("/:id", deleteUser)

module.exports = Router;