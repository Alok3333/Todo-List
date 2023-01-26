const express = require('express');
const cors = require('cors');             //Corss-Origin Resourse Sharing
const connectDB = require('./mongodb');

const app = express();          // Calling the express function

app.use(express.json());
app.use(cors());

connectDB();

app.listen(6000, () => {
    console.log("Server is running on port 6000");
})