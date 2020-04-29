exports.setCors = (req, res, next) => {
    res.header("Access-Control--Allow-Origin", "*")

    res.header("Access-Control-Allow-Headers", "Origin, x-Request-With, Content-Type, Accept")

    res.header("Access-Control-Allow-Method", "POST, GET, PUT, DELETE, OPTIONS")
    next()
}