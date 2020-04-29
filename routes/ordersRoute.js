const Router = require("express").Router()

const {
    getOrders,
    getOrderById,
    postOrder,
    putOrder,
    deleteOrder
} = require("../controllers/ordersController")
// const { validateInput } = require("../middleware/validator")

Router.get("/", getOrders)

Router.get("/", getOrderById)

Router.post("/", postOrder)

Router.put("/:id", putOrder)

Router.delete("/:id", deleteOrder)

module.exports = Router;