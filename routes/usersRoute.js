const Router = require("express").Router()

const {
    getUsers,
    postUsers,
    putUsers,
    deleteUsers
} = require("../controllers/usersController")

Router.get("/", getUsers)

Router.post("/", postUsers)

Router.put("/:id", putUsers)

Router.delete("/:id", deleteUsers)

module.exports = Router;