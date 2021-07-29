const { Hero, Ability } = require("../models");
const AbilityController = require("./ability.controller");
const { Op } = require("sequelize");


module.exports.createHero = async (req, res, next) => {
  try{
    const {
      body: { nickname, realName, catchPhrase, originDescription, abilities }
    } = req;
    const params = { nickname, realName, catchPhrase, originDescription };
    //console.log(params);
    const hero = await Hero.create(params);
    //-------------------------------------------------------------------
    const allAbilities = await Ability.findAll();
    const dbAbilities = allAbilities.map((ability) => ability.dataValues.name);

    //-----------сопоставление способностей из запроса со способностями в базе данных
    const ab = abilities.filter((ability) => !dbAbilities.includes(ability));

    //-----------добавляем способности если их до этого не было в базе
    if(ab.length){
      const insAbilities = ab.map((ability) => ({name: ability}));
      const inserts = await Ability.bulkCreate(insAbilities);
    }else{
      console.log("Can't add ability");
    }

    const findAbilities = await Ability.findAll({
      where: {
        name:{
          [Op.in]: abilities
        }
      }
    });
    const find = await Ability.findOne({
      where:{
        name: "sword master"
      }
    });
    console.log(find);
    const { id } = find;
    await hero.addAbility(id);

    res.status(200).send({ message: "create new hero", data: hero });
  }catch(error){
    next(error);
  }
}