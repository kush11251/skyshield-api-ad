const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ cpuUsage: 50, memoryUsage: 75 });
});

module.exports = router;