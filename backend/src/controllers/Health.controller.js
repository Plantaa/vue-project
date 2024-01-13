function getHealth(req, res) {
    console.log("Health check");
    res.send("Server is up and running!");
}

module.exports = {
    getHealth,
}