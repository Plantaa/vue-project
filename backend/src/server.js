const dotenv = require("dotenv").config;
const port = process.env.PORT || 5000;

const https = require("https");
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const dataRoutes = require("./routes/Data.routes");
const fileRoutes = require("./routes/File.routes");
const monitoringRoutes = require("./routes/Monitoring.routes");
const usersRoutes = require("./routes/User.route");

const mongodbConnect = require("./mongodb/mongo-client");

const app = express();

app.use(cors());
app.use(bodyParser.json({limit: '3MB'}));

mongodbConnect();

app.use("/data", dataRoutes);
app.use("/file", fileRoutes);
app.use("/monitoring", monitoringRoutes);
app.use("/users", usersRoutes);

https.createServer({
    key: fs.readFileSync("key.pem"),
    cert: fs.readFileSync("cert.pem")
}, app).listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
})
