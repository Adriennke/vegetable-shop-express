//the controller folder handles any incoming url requests
const createError = require("http-errors")
// const db = require("../models/db")
const User = require("../models/usersSchema")
const { validationResult} = require("express-validator")
const jwt = require("jsonwebtoken")

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
        next({status:404, message: "id is not valid"})
    }
}
// //request to add data
exports.postUser = async(req, res, next) => {
    try {
        const user = new User(req.body)
        user.generateAuthToken()
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
     if(!deletedUser) throw createError(404)
     res.json({
         success: true,
         user: this.deletedUser
     })
 } 
 catch (error) {
    next(error)    
 }
}
exports.login = async(req,res,next) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({
            email,
            password
        })
        if(!user) throw createError("invalid password or email-address")
        res.header("test", "123")
        res.json({
            success:true,
            message: user.firstName + " welcome!"
        })
    } 
    catch (error) {     
        next(error)
        
    }
}
