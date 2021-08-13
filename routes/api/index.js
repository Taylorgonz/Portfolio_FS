const router = require("express").Router();

const photoRoute = require("./photo-routes");
const websiteRoute = require("./website-routes");


router.use("/photos", photoRoute);
router.use("/websites", websiteRoute);


module.exports = router;