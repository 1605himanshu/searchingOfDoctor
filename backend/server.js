const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const doctorRoutes = require('./routes/doctorRoutes');

dotenv.config();
const app = express();
connectDB();

app.use(cors({
  origin: "https://my-frontend3.vercel.app", // allow frontend origin
  credentials: true // if you're using cookies or auth
}));
app.use(express.json());

app.use('/api/doctors', doctorRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
