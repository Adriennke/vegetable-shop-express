//for vegetableSchema, pls scroll down for userSchema!!!!

// const mongoose = require("mongoose")
// //import collection of vegetables
// const Vegetable = require("../models/vegetablesSchema")

// const faker = require("faker")

// const main = async() => { 
//     mongoose.connect(
//     "mongodb://127.0.0.1:27017/vegetable-shop",
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     }
//     )
//     mongoose.connection.on("error", (err)=> console.log(err))
//     mongoose.connection.on("open", () => console.log("database is connected"))
    
//     try {
//        await Vegetable.deleteMany({}) 
//     } 
//     catch (error) {
//         console.log(error)
//     }


//     const vegetablePromises = Array(10).fill(null).map(()=>{
//         const vegetable = new Vegetable(
//             {
//                 name: faker.hacker.noun(),
//                 price:faker.commerce.price(),
//                 origin:faker.address.country(),
//                 image: faker.image.nature()
//             }
//         )
//         return vegetable.save()
//     })
//     try {
//         await Promise.all(vegetablePromises)
//         console.log("vegetables added into db")
//     } 
//     catch (error) {
//         console.log(error)
//     }
// }
// main()




//for usersSchema

const mongoose = require("mongoose")
const User = require("../models/usersSchema")
const faker = require("faker")


const main = async()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/record-shop-live", {
                useNewUrlParser: true,
                useUnifiedTopology: true
})
   mongoose.connection.on("error", (err) => console.log(err))
   mongoose.connection.on("open", () => console.log("database connected"))

   try {
       await User.deleteMany({})
       console.log("refresh users collection")
   } catch (err) {
       console.log(err)
   }
   let userPromises = Array(10).fill(null).map(() => {
               const user = new User(
                   //must match with the schema order
                   //take the user and create an object into it and use fake api to store fake users
                   {
                       firstName: faker.name.firstName(),
                       lastName: faker.name.lastName(),
                       email: faker.internet.email(),
                       password: faker.internet.password()
                   }
               )
               return user.save()
                })
              try {
                  await Promise.all(userPromises);
                  console.log("users added into db")
              } catch (err) {
                  console.log(err)
              }
}
main()
