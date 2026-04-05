const router = require("express").Router();
const auth = require("../middlewares/authMiddleware");
const role = require("../middlewares/roleMiddleware");
const ctrl = require("../controllers/recordController");

router.use(auth);

router.post("/", role(["ADMIN"]), ctrl.create);
router.get("/", ctrl.getAll);
router.patch("/:id", role(["ADMIN"]), ctrl.update);
router.delete("/:id", role(["ADMIN"]), ctrl.remove);

module.exports = router;
