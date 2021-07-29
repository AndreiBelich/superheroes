const HeroController = require("../controllers/hero.controller");
const AbilityController = require("../controllers/ability.controller");
const { Router } = require("express");

const heroRouter = Router();

heroRouter.post("/",
 HeroController.createHero
);

module.exports = heroRouter;