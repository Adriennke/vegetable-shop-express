//handles any incoming url requests

exports.getVegetables = (req, res) => {
    res.send("get request")
}

exports.postVegetables = (req, res) => {
    console.log(req.body)
    res.send("post request")
}

exports.putVegetables = (req, res) => {
    console.log(req.params.id)
    res.send("request")
}

exports.deleteVegetables = (req, res) => {
    console.log(req.params.id)
    res.send("delete request")
}
