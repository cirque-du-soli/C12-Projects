/*
Soliloquy Yarrow -- Student #2342261 
C12-WebDev2 -- Assignment: Blog
2023-10-03
*/

const express = require('express');
const app = express();
const db = require('./models');

// Test Route
app.get('/', (req, res) => {
    res.send('Greetings, user!');
});


/* 
// NOTE TO SELF: don't do this it's stupid cuz you could lose your db tables/data, 
// e.g. if nodemon restarts server while editing the model files
// Use Migrations instead

// Sync the database
db.sequelize.sync().then(() => {
    console.log('Database synced!');
}).catch((err) => {
    console.log("Error syncing database. DebugCode: 1001");
    console.log(err);
});
*/  

// Starting the server
app.listen(3001, () => {
    console.log('Server running on port 3001')
});