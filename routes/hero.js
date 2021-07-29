const HeroController = require("../controllers/hero.controller");
const AbilityController = require("../controllers/ability.controller");
const { Router } = require("express");
const { addAbilityToDB } = require("../middlewares/ability.mw");

const heroRouter = Router();

heroRouter.post("/",
 addAbilityToDB,
 HeroController.createHero
);

heroRouter.get("/:id",
 HeroController.getAllHeroAbilities);

heroRouter.delete("/remove_ability/:id", HeroController.deleteAbility);

heroRouter.delete("/destroy/:id", HeroController.deleteHero);

heroRouter.patch("/update/:heroId",
 addAbilityToDB,
 HeroController.changeHeroInformation);

module.exports = heroRouter;