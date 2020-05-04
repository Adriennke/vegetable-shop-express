const Router = require("express").Router()

const {
    getUsers,
    getUserById,
    postUser,
    putUser,
    deleteUser,
    login
} = require("../controllers/usersController")
const { validateInput } = require("../middleware/validator")
const auth = require("../middleware/authenticator");
const isAdmin = require("../middleware/rolesAuthenticator");

Router.get("/", auth, isAdmin, getUsers)

Router.get("/",auth, getUserById)

Router.post("/", validateInput(), postUser)

Router.post("/login", login)

Router.put("/:id",auth, putUser)

Router.delete("/:id",auth, deleteUser)

module.exports = Router;