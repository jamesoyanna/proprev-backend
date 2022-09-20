const express = require('express');
const connectDB = require('./config/dbConnect');
const UserRoutes = require('./routes/UserRoutes')
require('dotenv').config()

 connectDB();

const app = express();
app.use(express.json());
app.use('/api/v1/users', UserRoutes);

const PORT  = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})

