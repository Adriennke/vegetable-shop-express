const mongoose = require("mongoose")
//destructure Schema from mongoose
const { Schema } = mongoose;

const VegetableSchema = new Schema({
    name: {type: String, required: true},
    price: {type: String, required: true},
    origin: {type: String, required: true}
},
{
    toObject:{
        virtuals:true
    },
    toJSON: {
        virtuals: true
    }
}
)

module.exports = mongoose.model("Vegetable", VegetableSchema)
