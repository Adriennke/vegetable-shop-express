//the controller folder handles any incoming url requests
const db = require("../models/db")
const createError = require("http-errors")

//set up route to new page
exports.getVegetableById = (req, res) => {
   const {id} = req.params
   //get all records and find the ones whose id matches with id 
   let vegetable = db.get("vegetables").find({id}).value()
   res.json({
       success: true,
       vegetable: vegetable
   })
}
exports.getVegetables = (req, res) => {
    //get all records and find the ones whose id matches with id 
    let vegetables = db.get("vegetables").value()
    res.json({
        success: true,
        vegetable: vegetables
    })
}
//request to add data
exports.postVegetables = (req, res) => {
    //get the value from user and store it into db, if the user not giving id, we assign one using new date
    db.get("vegetables").push(req.body).last().assign({ id:new Date().getTime().toString()}).write()
    res.json({success:true, vegetable: req.body})
}
//request to update data
exports.putVegetables = (req, res) => {
    //req.params searches the URL path
    const {id} = req.params

    const vegetable = req.body

    //set the id to date
    // vegetable.id = new Date().toString()
    //get the vegetable, find the id and assign a new veggie to it, then save it
    db.get("vegetables").find({id}).assign(vegetable).write()

    //if the request is successful, vegetable constant gonna become new vegetable.
    res.json({success:true, vegetable:vegetable})
}

exports.deleteVegetables = (req, res, next) => {
    if (req.params.id !== 1) {
        next(createError(500))
    }
    const {id} = req.params
    let vegetable = db.get("vegetables").remove({
        id
    }).write();
    res.json({
        success: true,
        vegetable: vegetable
    })
}
