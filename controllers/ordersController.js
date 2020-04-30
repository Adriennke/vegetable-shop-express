const createError = require("http-errors")
const Order = require("../models/ordersSchema")

exports.getOrders = async(req, res, next) => {
     try {
      const orders = await Order.find().populate("Vegetable", "-__v")
      res.json({
          success: true,
          order:orders
      })
}
 catch (error) {
    next(error)
}
}
exports.getOrderById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const order = await Order.findById(id).populate("Vegetable", "-__v")
         if (!order) throw createError(404)
        res.json({
            success: true,
            order:order
        })
    } catch (error) {
        next(error)
    }
}

exports.postOrder = async(req, res, next) => {
  try {
      const order = new Order({
          product: req.body.product,
          amount: req.body.amount,
          price: req.body.price
      })
        await order.save()
        res.json({
            success: true,
            order:order
        })
  } catch (error) {
      next(error)
  }
}

exports.putOrder = async(req, res, next) => {
    const {
        id
    } = req.params
    try {
        const order = await
        Order.findByIdAndUpdate(id,req.body )
        const updatedOrder = await
        Order.findById(id)
        res.json({
            success: true,
            order: updatedOrder
        })
    } 
    catch (error) {
        next(error)
    }
}

exports.deleteOrder = async(req, res, next) => {
    const { id }=req.params;
   try {
           const deletedOrder = await Order.findByIdAndDelete(id)
           if (!deletedOrder) throw createError(404)
           res.json({
               success: true,
               order: this.deletedOrder
           })
   } 
   catch (error) {  
        next(error)       
   }
 
}
