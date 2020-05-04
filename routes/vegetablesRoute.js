const Router = require("express").Router()

const {
    getVegetableById,
    getVegetables,
    postVegetable,
    putVegetable,
    deleteVegetable
} = require("../controllers/vegetablesController");

const auth = require("../middleware/authenticator");
const isAdmin = require("../middleware/rolesAuthenticator");


Router.get("/:id",auth, getVegetableById)

Router.get("/",auth, getVegetables)

Router.post("/",auth, isAdmin, postVegetable)

Router.put("/:id", auth, isAdmin, putVegetable)

Router.delete("/:id", auth, isAdmin, deleteVegetable)

module.exports = Router;