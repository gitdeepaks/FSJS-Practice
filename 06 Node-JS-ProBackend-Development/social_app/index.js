// Bring
const express = require("express");
// assign
const app = express();
// PORT
const PORT = 3000;

// Route
app.get("/", (req, res) => {
    res.send("<h1>Hello Full Satck Web Dev JavaScript</h1>");
});

app.get("/insta", (req, res) => {
    //   res.status(200).send("Hello World");
    const insta = {
        userName: "deepak",
        followers: 200,
        following: 10,
    };
    res.status(200).json({ insta });
});
app.get("/linked", (req, res) => {
    res.status(200).send("Hello World");
});

app.get("/twitter", (req, res) => {
    res.status(200).send("Hello World");
});

// Listen
app.listen(PORT, () => {
    console.log("Server Running");
});