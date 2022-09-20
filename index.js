const express = require('express');
const connectDB = require('./config/dbConnect');
const UserRoutes = require('./routes/UserRoutes');
const ProjectRoutes = require('./routes/ProjectRoutes');
require('dotenv').config()

 connectDB();

const app = express();
app.use(express.json());
app.use('/api/v1/users', UserRoutes);
app.use('/api/v1/projects', ProjectRoutes);

const PORT  = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})

