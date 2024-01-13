const { randomUUID } = require("crypto");

function getData(req, res) {
    const data = {
        uuid: randomUUID(),
        user: "John Doe",
    }
    console.log(data);
    res.send(data);
}

module.exports = getData;