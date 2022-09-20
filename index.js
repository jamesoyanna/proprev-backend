const express = require('express');
const connectDB = require('./config/dbConnect');

require('dotenv').config()
 connectDB();

const app = express();
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Welcome to poprev')
})

const PORT  = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})

