const express = require("express");
const router = express.Router();

const {
    findUser,
    storeUser,
} = require("../controllers/User.controller");

router.use((req, res, next) => {
    console.log(("Time: ", Date.now()));
    next();
})

router.get("/", findUser);
router.post("/", storeUser)

module.exports = router;
