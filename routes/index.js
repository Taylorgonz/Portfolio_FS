const path = require("path");
const router = require("express").Router();
const apiRoutes = require('./api');


// API routes
router.use('/api', apiRoutes);
// Auth Routes


// If no API routes, then send to react
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
});

module.exports = router;