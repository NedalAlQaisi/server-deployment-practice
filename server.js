`use strict`;

const express = require("express");

const app = express();

function start(port) {
    app.listen(port, () => {
        console.log(`listening to port ${port}`);
    });
}

app.get("/", (req, res) => {

    res.status(200).send("You are in the home page");
});

app.get("/data", (req, res) => {

    res.json({
        name: "Nedal",
        email: "n.alqaisi221999@gmail.com",
    });
});

module.exports = {
    app: app,
    start: start,
};