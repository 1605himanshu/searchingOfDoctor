const express = require('express');
const router = express.Router();
const { getDoctors } = require('../controllers/doctorController'); // ✅ now this works

router.get('/', getDoctors);

module.exports = router;
