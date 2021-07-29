const { Hero, Ability, HeroToAbility } = require("../models");
const { Op } = require("sequelize");
const createError = require("http-errors");

module.exports.createHero = async (req, res, next) => {
  try{
    const {
      body: { nickname, realName, catchPhrase, originDescription, abilities }
    } = req;
    const params = { nickname, realName, catchPhrase, originDescription };
    const hero = await Hero.create(params);
    const findAbilities = await Ability.findAll({
      where: {
        name:{
          [Op.in]: abilities
        }
      }
    });
    await hero.addAbilities(findAbilities);

    res.status(200).send({ message: "create new hero", data: hero });
  }catch(error){
    next(error);
  }
}

module.exports.getAllHeroAbilities = async (req, res, next) => {
  try{
    const { params: { id } } = req;
    const hero = await Hero.findByPk(id, {
      include: [
        {
          model: Ability,
          through: {
            attributes: []
          }
        } 
      ]
    });
    const names = hero.Abilities.map(({name}) => name);
    res.send({data: names});
  }catch(error){
    next(error);
  }
}

module.exports.deleteAbility = async (req, res, next) => {
  try{
    const { 
      params : { id },
      body: { ability }
    } = req;
    const findAbility = await Ability.findOne({
      where: {
        name: ability
      }
    });
    if(!findAbility){
      return next(createError(404, `Can't find ability ${ability}`));
    }
    const deleteAbility = await HeroToAbility.destroy({
      where: {
        heroId: id,
        abilityId: findAbility.dataValues.id
      }
    });
    //console.log(deleteAbility);
    if(deleteAbility !== 1){
      return next(createError(404, "Ability not found and not deleted!" ));
    }
    res.send({data: "ok"});
  }catch(error){
    next(error);
  }
}

module.exports.deleteHero = async (req, res, next) => {
  try{
    const { params: { id } } = req;
    const deletedHero = await Hero.destroy({
      where: {
        id: id
      }
    });
    if(deletedHero !== 1){
      return next(createError(404, "Hero wasn't deleted"));
    }
    res.send({data: `Hero was deleted!`});
  }catch(error){
    next(error);
  }
}

module.exports.changeHeroInformation = async (req, res, next) => {
  try{
    const { 
      body,
      params: { heroId }
    } = req;
    const { abilities = null } = body;

    const [updatedHero] = await Hero.update(body, {
      where: {
        id: heroId
      }
    });
    console.log(updatedHero);
    if(updatedHero !== 1){
      return next(createError(400, "Can't updated information about hero"));
    }
    res.send({data: "Hero has new real name!"});
  }catch(error){
    next(error);
  }
}