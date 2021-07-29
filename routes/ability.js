const AbilityController = require("../controllers/ability.controller");
const { Router } = require("express");

const abilityRouter = Router();

abilityRouter.post("/", AbilityController.createAbility);

module.exports = abilityRouter;