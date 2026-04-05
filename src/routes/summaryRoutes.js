const router = require("express").Router();
const auth = require("../middlewares/authMiddleware");
const role = require("../middlewares/roleMiddleware");
const ctrl = require("../controllers/summaryController");

router.use(auth);

router.get("/", role(["ANALYST", "ADMIN"]), ctrl.summary);

module.exports = router;
