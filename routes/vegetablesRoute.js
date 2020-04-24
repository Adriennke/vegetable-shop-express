const Router = require("express").Router()

const {
    getVegetableById,
    getVegetables,
    postVegetable,
    putVegetable,
    deleteVegetable
} = require("../controllers/vegetablesController")



Router.get("/:id", getVegetableById)

Router.get("/", getVegetables)

Router.post("/", postVegetable)

Router.put("/:id", putVegetable)

Router.delete("/:id", deleteVegetable)

module.exports = Router;