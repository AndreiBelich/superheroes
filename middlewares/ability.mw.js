const { Ability } = require("../models");

module.exports.addAbilityToDB = async (req, res, next) => {
  try{
    const {
      body: { abilities }
    } = req;
    const allAbilities = await Ability.findAll();
    const dbAbilities = allAbilities.map((ability) => ability.dataValues.name);

    const ab = abilities.filter((ability) => !dbAbilities.includes(ability));

    if(ab.length){
      const insAbilities = ab.map((ability) => ({name: ability}));
      const inserts = await Ability.bulkCreate(insAbilities);
    }
    next();
  }catch(error){
    next(error);
  }
}