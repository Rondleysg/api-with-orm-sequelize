import express from "express";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || "3000";
const HOSTNAME = "http://localhost";

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    next();
});

app.get("/teste", (req, res) => {
    res.status(200).send({ message: `Welcome` });
});

app.listen(PORT, () => {
    console.log(`Server running successfully ${HOSTNAME}:${PORT}`);
});

export default app;
