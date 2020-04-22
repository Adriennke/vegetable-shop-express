const Router = require("express").Router()

const {
    getOrders,
    postOrders,
    putOrders,
    deleteOrders
} = require("../controllers/ordersController")

Router.get("/", getOrders)

Router.post("/", postOrders)

Router.put("/:id", putOrders)

Router.delete("/:id", deleteOrders)

module.exports = Router;