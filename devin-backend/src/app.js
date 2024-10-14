const express = require("express");
const app = express();
const connectDB = require("./config/database");
const User = require("./models/user");

const { adminAuth, userAuth } = require("./middleswares/auth");

app.post("/signup", async (req, res) => {
    const user = new User ({
        firstName:  "Anuj",
        lastName: "Goyal",
        emailId: "goyal@anuj.com",
        password: "anuj@123"
    });

    try {
        await user.save();
        res.send("User Added succesfully");
    } catch (err) {
        res.status(400).send("Error saving the user:" + err.message);
    }
});

app.use("/admin", adminAuth);

app.post("/user/login", (req, res) => {
    res.send("User logged in succesfully");
});

app.get("/user", userAuth, (req, res) => {
    res.send("User Data Sent");
});

app.get("/admin/getAllData", (req, res) => {
    res.send("All Data Sent");
});

app.get("/admin/deleteUser", (req, res) => {
    res.send("Deleted a user");
});

app.post("/user", (req, res) => {
    res.send("Succesfully saved the data!");
});

app.delete("/user", (req, res) => {
    res.send("Deleted Succesfully!");
});

app.use("/test", (req, res) => {
    res.send("Hello from the server!");
});

connectDB()
    .then(() => {
        console.log("Database connection established...");
        app.listen(7777, () => {
            console.log("Server is successfully listening on port 7777...");
        });
    })
    .catch((err) => {
        console.log("Database cannot be connected!!");
    });
