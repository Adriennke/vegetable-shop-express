// //the controller folder handles any incoming url requests
// const db = require("../models/db")

// //set up route to new page
// exports.getOrders = (req, res) => {
//     const {
//         id
//     } = req.params
//     //get all records and find the ones whose id matches with id 
//     let order = db.get("orders").find({
//         id
//     }).value()
//     res.json({
//         success: true,
//         order: order
//     })
// }
// //request to add data
// exports.postOrders = (req, res) => {
//     //get the value from user and store it into db, if the user not giving id, we assign one using new date
//     db.get("orders").push(req.body).last().assign({
//         id: new Date().toString()
//     }).write()
//     res.json({
//         success: true,
//         order: req.body
//     })
// }
// //request to update data
// exports.putOrders = (req, res) => {
//     //req.params searches the URL path
//     const {
//         id
//     } = req.params

//     const order = req.body

//     //set the id to date
//     order.id = new Date().toString()
//     //get the order, find the id and assign a new veggie to it, then save it
//     db.get("orders").find({
//         id
//     }).assign(order).write()

//     //if the request is successful, order constant gonna become new order.
//     res.json({
//         success: true,
//         order: order
//     })
// }

// exports.deleteOrders = (req, res) => {
//     if (id !== 1) {
//         next(createError(500))
//     }
//     const {
//         id
//     } = req.params
//     let order = db.get("orders").remove({
//         id
//     }).write()
//     res.json({
//         success: true,
//         order: order
//     })
// }
