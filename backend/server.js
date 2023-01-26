const express = require('express');
const cors = require('cors');             //Corss-Origin Resourse Sharing

const app = express();          // Calling the express function

app.use(express.json());
app.use(cors());

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})