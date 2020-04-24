// //the controller folder handles any incoming url requests
// const db = require("../models/db")

// //set up route to new page
// exports.getUsers = (req, res) => {
//     const {
//         id
//     } = req.params
//     //get all records and find the ones whose id matches with id 
//     let user = db.get("users").find({
//         id
//     }).value()
//     res.json({
//         success: true,
//         user: user
//     })
// }
// //request to add data
// exports.postUsers = (req, res) => {
//     //get the value from user and store it into db, if the user not giving id, we assign one using new date
//     db.get("users").push(req.body).last().assign({
//         id: new Date().getTime().toString()
//     }).write()
//     res.json({
//         success: true,
//         user: req.body
//     })
// }
// //request to update data
// exports.putUsers = (req, res) => {
//     //req.params searches the URL path
//     const {
//         id
//     } = req.params

//     const user = req.body

//     //set the id to date
//     user.id = new Date().toString()
//     //get the user, find the id and assign a new veggie to it, then save it
//     db.get("users").find({
//         id
//     }).assign(user).write()

//     //if the request is successful, user constant gonna become new user.
//     res.json({
//         success: true,
//         user: user
//     })
// }

// exports.deleteUsers = (req, res) => {
//     if (id !== 1) {
//         next(createError(500))
//     }
//     const {
//         id
//     } = req.params
//     let user = db.get("users").remove({
//         id
//     }).write()
//     res.json({
//         success: true,
//         user: user
//     })
// }
