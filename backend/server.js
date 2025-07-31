 const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const doctorRoutes = require('./routes/doctorRoutes');

dotenv.config();
const app = express();
connectDB();

const allowedOrigins = [
  'https://my-frontend3.vercel.app',
  'https://my-frontend3-git-main-himanshu-yadavs-projects-60edff19.vercel.app',
  'https://my-frontend3-jo1l9kguh-himanshu-yadavs-projects-60edff19.vercel.app'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('CORS error: Origin not allowed'));
    }
  },
  credentials: true
}));

app.use(express.json());

app.use('/api/doctors', doctorRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
