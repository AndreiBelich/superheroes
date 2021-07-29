const { Router } = require("express");
const heroRouter = require("./hero");
const abilityRouter = require("./ability");

const router = Router();

router.use("/heroes", heroRouter);
router.use("/abilities", abilityRouter);

module.exports = router;