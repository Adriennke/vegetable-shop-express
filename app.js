//bring in node module
const express = require("express")
const createError = require("http-errors")

//create app object
const app = express()
const mongoose = require("mongoose")
const logger = require("morgan")


//specify port
const port = process.env.PORT || 4000;



//import routes
const indexRoute = require("./routes/indexRoute")
const vegetablesRoute = require("./routes/vegetablesRoute")
const usersRoute = require("./routes/usersRoute")
const ordersRoute = require("./routes/ordersRoute")

const { setCors } = require("./middleware/security")

mongoose.connect(
    "mongodb://127.0.0.1:27017/vegetable-shop", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
mongoose.connection.on("error", (err) => console.log(err))
mongoose.connection.on("open", () => console.log("database is connected"))

app.use(express.json())
app.use(logger("dev"))
app.use(setCors)

app.use("/", indexRoute)
app.use("/vegetables", vegetablesRoute)
app.use("/users", usersRoute)
app.use("/orders", ordersRoute)


app.use((req, res, next)=>{
    next(createError(404))
})

app.use((err, req, res, next)=>{
    res.json({
        status: err.status,
        message: err.message
    })
})

//test if server is running
app.listen(port, () => console.log("server is running"))

