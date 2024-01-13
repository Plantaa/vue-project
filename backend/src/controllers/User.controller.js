const User = require("../mongodb/models/user");
const { isEmpty } = require("../utils/objUtils");

async function findUser(req, res) {
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
        res.status(500).json({ message: "Failed to fetch users" })
    }
}

async function storeUser(req, res) {
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
}

module.exports = {
    findUser,
    storeUser,
}