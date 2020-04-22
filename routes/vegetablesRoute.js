const Router = require("express").Router()

const { getVegetables, postVegetables, putVegetables, deleteVegetables } = require("../controllers/vegetablesController")

Router.get("/", getVegetables )

Router.post("/", postVegetables)

Router.put("/:id", putVegetables)

Router.delete("/:id", deleteVegetables)

module.exports = Router;