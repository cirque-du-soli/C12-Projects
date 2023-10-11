/*
Soliloquy Yarrow -- Student #2342261 
C12-WebDev2 -- MidtermTodo
2023-10-04
*/

const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

// Models
const db = require("./models");

// Routes
const todoRouter = require("./routes/todos");
app.use("/", todoRouter);

// Backup Route
app.get("/", (req, res) => {
    res.send("Greetings, user!");
});

// Sync the database to match the models
// WARNING! DESTRUCTIVE! PROCEED WITH CAUTION!!!
/* FIXME - Comment this out after schema is up to date
db.sequelize
    .sync({ alter: true })
    .then(() => {
        console.log("Database synced!");
    })
    .catch((err) => {
        console.log("===== Error syncing database. DebugCode: 1001 ======");
        console.log(err);
    });
*/

// Starting the server
app.listen(3001, () => {
    console.log("Server running on port 3001");
});
