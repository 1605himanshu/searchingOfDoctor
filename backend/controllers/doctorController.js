const Doctor = require('../models/Doctor');

const getDoctors = async (req, res) => {
  try {
    const { location, specialty, name } = req.query;
    const query = {};

    if (location) query.location = new RegExp(location, 'i');
    if (specialty) query.profession = new RegExp(specialty, 'i'); // assuming 'profession' in DB
    if (name) query.name = new RegExp(name, 'i'); // <--- ADD THIS LINE

    const doctors = await Doctor.find(query);
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = { getDoctors };
