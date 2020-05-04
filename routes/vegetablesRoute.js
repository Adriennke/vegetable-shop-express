const Router = require("express").Router()

const {
    getVegetableById,
    getVegetables,
    postVegetable,
    putVegetable,
    deleteVegetable
} = require("../controllers/vegetablesController");
const auth = require("../middleware/authenticator");




Router.get("/:id",auth, getVegetableById)

Router.get("/",auth, getVegetables)

Router.post("/",auth, postVegetable)

Router.put("/:id",auth, putVegetable)

Router.delete("/:id",auth, deleteVegetable)

module.exports = Router;