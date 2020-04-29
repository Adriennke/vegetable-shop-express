//the controller folder handles any incoming url requests
const createError = require("http-errors")
// const db = require("../models/db")
const User = require("../models/usersSchema")
// const { validationResult} = require("express-validator")

// //set up route to new page
exports.getUsers = async(req, res, next) => {
 try {
     const users = await User.find()
     res.json({
         success:true,
         users: users
     })
 }
  catch (error) {
     next(error)
 }
}

exports.getUserById = async (req, res, next) => {
    const {id} = req.params;
    try {
        const user = await User.findById(id)
        if (!user) throw createError(404)
        res.json({
            success: true,
            users: user
        })
    } catch (error) {
        next({status:4040, message: "id is not valid"})
    }
}
// //request to add data
exports.postUser = async(req, res, next) => {
    try {
        const user = new User(
            {
               firstName: req.body.firstName,
               lastName: req.body.lastName,
               email: req.body.email,
               password: req.body.password 
            }
        )
        await user.save()
        res.json({
            success: true, user:user
        })
    }
     catch (error) {
       next(error) 
    }
}
// //request to update data
exports.putUser = async(req, res, next) => {
    //req.params searches the URL path
    const {
        id
    } = req.params

try {
    const user = await User.findByIdAndUpdate(id, req.body)
    const updatedUser = await User.findById(id)
    res.json({
        success:true,
        user:updatedUser
    })
} 
catch (error) {
    next(error)
}
}

exports.deleteUser = async(req, res, next) => {
 const { id } = req.params;
 try {
     const deletedUser = await User.findByIdAndDelete(id)
     res.json({
         success: true,
         user: this.deletedUser
     })
 } 
 catch (error) {
    next(error)    
 }
}
