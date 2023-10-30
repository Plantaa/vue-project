const express = require("express");
const cors = require("cors");
const app = express();
const port = 80;

app.use(cors());

app.get("/health", (req, res) => {
    console.log("Health check");
    res.send("Server is up and running");
})

app.get("/data", (req, res) => {
    const data = {
        user: "John Doe",
    }
    console.log(data);
    res.send(data);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
})