//bring in node module
const express = require("express")
const createError = require("http-errors")

//create app object
const app = express()

//specify port
const port = process.env.PORT || 4000;

//import routes
const indexRoute = require("./routes/indexRoute")
const vegetablesRoute = require("./routes/vegetablesRoute")

app.use(express.json())
app.use("/", indexRoute)
app.use("/vegetables", vegetablesRoute)

//home 
// app.get("/", (req, res)=>{
//     res.send("hi")
// })

//vegetables
// app.get("/vegetables", (req, res) =>{
//     res.send("get request")
// })

// app.post("/vegetables", (req, res)=>{
//     console.log(req.body)
//     res.send("post request")
// })
//replace the whole vegetable
// app.put("/vegetables/:id", (req, res)=>{
//     console.log(req.params.id)
//     res.send("request")
// })
// app.delete("/vegetables/:id", (req, res)=>{
//     console.log(req.params.id)
//     res.send("delete request")
// })


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

