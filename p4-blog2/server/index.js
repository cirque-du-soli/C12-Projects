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


// Sync the database to match our models
// WARNING! DESTRUCTIVE! PROCEED WITH CAUTION!!!
db.sequelize.sync({ alter: true }).then(() => {
    console.log('Database synced!');
}).catch((err) => {
    console.log("Error syncing database. DebugCode: 1001");
    console.log(err);
});

// Starting the server
app.listen(3001, () => {
    console.log('Server running on port 3001')
});