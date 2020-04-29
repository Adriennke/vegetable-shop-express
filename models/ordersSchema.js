const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrderSchema = new Schema({

    product: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vegetable"
    }],
    amount: {type: Number, required: true},
    price: {type: Number, required: true}
}
// {
//     toObject:{
//         virtuals: true
//     },
//     toJSON:{
//         virtuals:true
//     }
// }
)
// OrderSchema.virtual("fullname").get(function () {
//     return `${this.firstName} ${this.lastName}`
// })

module.exports = mongoose.model("Order", OrderSchema);