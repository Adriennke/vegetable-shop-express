const mongoose = require("mongoose")
const { Schema } = mongoose;
const AddressSchema = require("./addressSchema")

const jwt = require("jsonwebtoken")
const {
   encrypt,
   compare
} = require("../lib/encryption")
const env = require("../config/config")


const uniqueValidator = require("mongoose-unique-validator")

const UserSchema = new Schema({
   firstName: {type: String, required: true, unique:true},
   lastName: {type: String, required: true},
   email: {type: String, required: true, unique:true},
   role:{
       type: String,
       enum: ["Admin", "User"],
       required: true
   },
   tokens: [{
             token: {
                type: String,
                required: true
             },
          }

       ],
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

UserSchema.methods.generateAuthToken = function(){
   const user = this;

   const token = jwt.sign({_id:user._id}, env.jwt_key).toString()

   user.tokens.push({token})

   return token;
}

UserSchema.methods.getPublicFields = function(){
   let returnObject = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      _id: this._id
   }
   return returnObject;
}

UserSchema.methods.checkPassword = async function(password) {
    const user = this;
    return await compare(password, user.password)
}

UserSchema.pre("save", async function (next) {
   // if(!this.isModified("password"))return next()

   this.password = await encrypt(this.password)
   next()
})

UserSchema.statics.findByToken = function (token) {
   const User = this;
   let decoded;

   try {
      decoded = jwt.verify(token, env.jwt_key);

   } catch (error) {
      return;
   }
   return User.findOne({
      _id: decoded._id,
      "tokens.token": token
   }).select("-password -__v")
}



UserSchema.plugin(uniqueValidator);

module.exports = mongoose.model( "User", UserSchema);