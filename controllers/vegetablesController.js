//the controller folder handles any incoming url requests
const createError = require("http-errors")

const Vegetable = require("../models/vegetablesSchema")

const jwt = require("jsonwebtoken")


// //set up route to new page
exports.getVegetableById = async(req, res, next) => {
    const {id} = req.params

 try {
   const vegetable = await Vegetable.findById(id)
   if(!vegetable) throw createError(404)
    res.json({
        success: true,
        data: vegetable
    })
 } 
 catch (error) {
     next(error)
 }
}

exports.getVegetables = async(req, res, next) => {
  try {
      const value = req.header("test")
      const check = jwt.verify(value, "secretkey")
      if(check){
      const vegetables = await Vegetable.find()
      res.json({
          success: true,
          data: vegetables
      })
      } 
      else{
          throw createError(404)
      }
  } 
  catch (error) {
      //instead of console.log, catch the error
      next(error)
  }
}
// //request to add data
exports.postVegetable = async(req, res, next) => {
    try {
        const vegetable = new Vegetable(
            { 
                name: req.body.name,
                price: req.body.price,
                origin: req.body.origin,
                image: req.body.image

            })
            //save it in db
        await vegetable.save()
        res.json({
            success: true,
            data: vegetable
        })

    } 
    
    catch (error) {
        next(error)
    }

}
// //request to update data
exports.putVegetable = async(req, res, next) => {
    //req.params searches the URL path
    const {id} = req.params

    try {
        const vegetable = await Vegetable.findByIdAndUpdate(id, req.body)
        const updatedVegetable = await Vegetable.findById(id)
        res.json({
            success: true,
            data: updatedVegetable
        })
    } 
    catch (error) {
        next(error)
    }

}

exports.deleteVegetable = async(req, res, next) => {
    const {id} = req.params;
    try {
        const deletedVegetable = await Vegetable.findByIdAndRemove(id)
        res.json({
            success: true,
            data: deletedVegetable

        })
    } 
    catch (error) {
        next(error)
    }
}