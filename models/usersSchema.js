const mongoose = require("mongoose")
const { Schema } = mongoose;
const AddressSchema = require("./addressSchema")

const uniqueValidator = require("mongoose-unique-validator")

const UserSchema = new Schema({
   firstName: {type: String, required: true, unique:true},
   lastName: {type: String, required: true},
   email: {type: String, required: true, unique:true},
   password: {type: String, required: true},
   address: AddressSchema
}
// {
//     toObject:{
//         virtuals: true
//     },
//     toJSON:{
//         virtuals: true
//     }
// }
)

// UserSchema.virtual("fullname").get(function(){
//     return `${this.firstName} ${this.lastName}`
// })

UserSchema.plugin(uniqueValidator);

module.exports = mongoose.model( "User", UserSchema);