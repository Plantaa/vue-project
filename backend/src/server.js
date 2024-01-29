const dotenv = require("dotenv").config;
const httpPort = process.env.HTTP_PORT || 5000;
const httpsPort = process.env.HTTPS_PORT || 443;

const fs = require("fs");
const http = require("http");
const https = require("https");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const dataRoutes = require("./routes/Data.routes");
const fileRoutes = require("./routes/File.routes");
const monitoringRoutes = require("./routes/Monitoring.routes");
const usersRoutes = require("./routes/User.route");

const mongodbConnect = require("./mongodb/mongo-client");

const privateKey = fs.readFileSync("key.pem");
const certificate = fs.readFileSync("cert.pem");
const credentials = {key: privateKey, cert: certificate};

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

mongodbConnect();

app.use("/data", dataRoutes);
app.use("/file", fileRoutes);
app.use("/monitoring", monitoringRoutes);
app.use("/users", usersRoutes);

app.use("/htmx/data", (req, res) => {
    res.setHeader("Content-Type", "text/html");
    fs.readFile("/backend/src/htmx/component.html", null, (error, data) => {
        if(error) {
            console.log(error);
            res.status(404).send({message: "File not found"});
        } else {
            res.send(data);
        }
    })
})

http.createServer(app).listen(httpPort, () => {
    console.log(`Example app listening on port ${httpPort}!`);
});
https.createServer(credentials, app).listen(httpsPort, () => {
    console.log(`Example app listening on port ${httpsPort}!`);
})
