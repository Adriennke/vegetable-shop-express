const Router = require("express").Router()

const { getVegetableById, getVegetables, postVegetables, putVegetables, deleteVegetables } = require("../controllers/vegetablesController")

Router.get("/:id", getVegetableById )

Router.get("/", getVegetables)

Router.post("/", postVegetables)

Router.put("/:id", putVegetables)

Router.delete("/:id", deleteVegetables)

module.exports = Router;