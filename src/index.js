const express = require("express");
const routes = require("./routes");

const app = express();

const PORT = process.env.PORT || "3000";
const HOSTNAME = "http://localhost";

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    next();
});

routes(app);

app.listen(PORT, () => {
    console.log(`Server running successfully ${HOSTNAME}:${PORT}`);
});

module.exports = app;
