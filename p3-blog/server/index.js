/*
Soliloquy Yarrow -- Student #2342261 
C12-WebDev2 -- Assignment xxx -- xxx
2023-10-xx
*/

// Acquire Dependencies
const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

// Apply Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

// Database Connection
const db = mysql.createPool({
    host: 'localhost',
    user: 'c12user',
    password: 'password',
    database: 'c12blog'
});

///////////////////////////////////////////////////////////////////// ROUTES

//////////////////// POSTs
/* 
// C.1: Create 1
app.post("/api/insert", (req, res) => {
    
    //these are the variables that are being sent from the client
    const xxx = req.body.xxx;
    const yyy = req.body.yyy;
    
    const sqlInsert = 
    "INSERT INTO xxxTableNamexxx (xxx, yyy) VALUES (?, ?);"
    db.query(sqlInsert, [xxx, yyy], (err, result) => {
        console.log("Result!!! " + result);
        console.log("Error!!! " + err);
    });
});
*/
//////////////////// GETs
// R.1: Read All
app.get("/api/get", (req, res) => {
    const sqlSelect = "SELECT * FROM c12blog.article;";
    db.query(sqlSelect, (err, result) => {
        console.log("TEST001")
        console.log(result);
        console.log(err);
        res.send(result);
    });
}); 
/* 
//////////////////// UPDATEs
// U.1: Update by xxx
app.put("/api/update", (req, res) => {
    const name = req.body.xxx;
    const review = req.body.yyy;
    const sqlUpdate = "UPDATE xxxTableNamexxx SET yyy = ? WHERE xxx = ?";
    
    db.query(sqlUpdate, [review, name], (err, result) => {
        if (err) console.log("TEST003: " + err);
    });
});

//////////////////// DELETEs
// D.1: Delete by xxx
app.delete("/api/delete/:xxx", (req, res) => {
    const name = req.params.xxx;
    const sqlDelete = "DELETE FROM xxxTableNamexxx WHERE xxx = ?";
    db.query(sqlDelete, name, (err, result) => {
        if (err) console.log("TEST002: " + err);
    });
});
*/
// Default Route
app.get('/', (req, res) => {
    res.send('---Default Route---\n\nHello World! \n\n Love from yours truly: \nindex.js (server folder) <3 \n\n');
});

///////////////////////////////////////////////////////////////////// END: ROUTES

// Run Server
app.listen(3001, () => {
    console.log('server running on port 3001');
});

