/*
Soliloquy Yarrow -- Student #2342261 
C12-WebDev2 -- Assignment 0 -- xxx
2023-10-xx
*/

const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = mysql.createPool({
    host: 'localhost',
    user: 'p0user',
    password: 'password',
    database: 'p0'
});

//apply middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api/get", (req, res) => {
    const sqlSelect = "SELECT * FROM movie_reviews";
    db.query(sqlSelect, (err, result) => {
        console.log("TEST001")
        console.log(result);
        console.log(err);
        res.send(result);
    });
}); 

app.post("/api/insert", (req, res) => {

    //these are the varisbles that are being sent from the client
    const movieName = req.body.movieName;
    const movieReview = req.body.movieReview;

    
    const sqlInsert = 
        "INSERT INTO movie_reviews (movieName, movieReview) VALUES (?, ?);"
    db.query(sqlInsert, [movieName, movieReview], (err, result) => {
        console.log("Result!!! " + result);
        console.log("Error!!! " + err);
    });

});


app.delete("/api/delete/:movieName", (req, res) => {
    const name = req.params.movieName;
    const sqlDelete = "DELETE FROM movie_reviews WHERE movieName = ?";
    db.query(sqlDelete, name, (err, result) => {
        if (err) console.log("TEST002: " + err);
    });
});

app.put("/api/update", (req, res) => {
    const name = req.body.movieName;
    const review = req.body.movieReview;
    const sqlUpdate = "UPDATE movie_reviews SET movieReview = ? WHERE movieName = ?";

    db.query(sqlUpdate, [review, name], (err, result) => {
        if (err) console.log("TEST003: " + err);
    });
});





//initial route
app.get('/', (req, res) => {
    res.send('Hello World 3');
});


//server
app.listen(3001, () => {
    console.log('server running on port 3001');
});

