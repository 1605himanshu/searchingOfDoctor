const express = require('express');
const cors = require('cors');
const doctorRoutes = require('./routes/doctorRoutes');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/doctors', doctorRoutes);

module.exports = app;
