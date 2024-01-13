const dotenv = require("dotenv").config;
const port = process.env.PORT || 5000;

const { randomUUID } = require('crypto');
const express = require("express");
const multer = require("multer");
const bodyParser = require("body-parser");
const cors = require("cors");

const User = require('./mongodb/models/user');
const File = require("./mongodb/models/file");
const mongodbConnect = require("./mongodb/mongo-client");
const isEmpty = require("./utils/objUtils");

const app = express();
var upload = multer();

app.use(cors());
app.use(bodyParser.json());

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

app.post("/files", upload.single("file.txt"), async (req, res) => {
    console.log("Trying to store file...");
    const file = req.file;
    const newFile = new File({
        fieldName: file.fieldname,
        originalName: file.originalname,
        buffer: file.buffer
    })
    try {
        await newFile.save();
        res.status(201).json({
            message: "File saved",
            newFile,
        });
        console.log("Stored new file");
    } catch (error) {
        console.error("Error storing file");
        console.error(error.message);
        res.status(500).json({ message: "Failed to save file" });
        return;
    }
})

app.get("/users", async (req, res) => {
    console.log("Trying to fetch users...");
    try {
        const users = await User.find();
        res.status(200).json({
            Users: users.map(user => ({
                uuid: user.uuid,
                name: user.name,
                id: user.id,
            })),
        });
        console.log("Fetched users");
    } catch (error) {
        console.error("Error fetching users");
        console.error(error.message);
        res.status(500).json({ message: "Failed to fetch goals" })
    }
});

app.post("/users", async (req, res) => {
    console.log("Trying to store user...");

    const body = req.body;
    if (isEmpty(body)) {
        res.status(400).json({ message: "Request body cannot be empty." });
        return;
    }
    const name = body.name;
    console.log(name);
    if (name === undefined || name.trim().length === 0) {
        res.status(422).json({ message: "Name field cannot be empty" });
        return;
    }

    const newUser = new User({ uuid: randomUUID(), name })
    try {
        await newUser.save();
        res.status(201).json({
            message: "User saved",
            newUser,
        });
        console.log("Stored new user");
    } catch (error) {
        console.error("Error storing user");
        console.error(error.message);
        res.status(500).json({ message: "Failed to save user" });
        return;
    }
})

mongodbConnect();

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
})
