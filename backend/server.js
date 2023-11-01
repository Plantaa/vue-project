const dotenv = require("dotenv").config;
const port = process.env.PORT || 5000;

const { randomUUID } = require('crypto');

const fs = require("fs");
const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const mongoose = require("mongoose");

const app = express();

app.use(cors());

app.get("/health", (req, res) => {
    console.log("Health check");
    res.send("Server is up and running!");
})

app.get("/data", (req, res) => {
    const data = {
        uuid: randomUUID(),
        user: "John Doe",
    }
    console.log(data);
    res.send(data);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
})
