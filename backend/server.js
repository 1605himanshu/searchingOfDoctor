 const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const doctorRoutes = require('./routes/doctorRoutes');

dotenv.config();
const app = express();
connectDB();

const allowedOrigins = [
  'https://my-frontend10.vercel.app'
  
];


app.use(cors());

app.use(express.json());

app.use('/api/doctors', doctorRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
