// routes/index.js

const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// Fallback route for handling 404 requests
router.use((req, res) => {
  res.status(404).send('Not Found');
});

module.exports = router;
