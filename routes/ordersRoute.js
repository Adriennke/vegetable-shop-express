const Router = require("express").Router()

const {
    getOrders,
    getOrderById,
    postOrder,
    putOrder,
    deleteOrder
} = require("../controllers/ordersController")
// const { validateInput } = require("../middleware/validator")
const auth = require("../middleware/authenticator");
const isAdmin = require("../middleware/rolesAuthenticator");

Router.get("/",auth, isAdmin, getOrders)

Router.get("/",auth, getOrderById)

Router.post("/",auth, postOrder)

Router.put("/:id",auth, putOrder)

Router.delete("/:id",auth, deleteOrder)

module.exports = Router;