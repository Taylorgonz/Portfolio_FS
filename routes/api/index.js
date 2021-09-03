const router = require("express").Router();

const photoRoute = require("./photo-routes");
const websiteRoute = require("./website-routes");
const techRoute = require("./tech-routes")


router.use("/photos", photoRoute);
router.use("/websites", websiteRoute);
router.use("/tech", techRoute);


module.exports = router;