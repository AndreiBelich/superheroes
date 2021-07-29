const { Ability, Sequelize } = require("../models");

module.exports.createAbility = async (req, res, next) => {
  try{
    const {
      body: { abilities }
    } = req; 
    console.log(abilities);// приходит такой массив [ 'fly', 'very fast', 'strong man' ]

    //-----------Выбор всех способностей из базы и преобразование их в массив
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

    res.send({ data: "add abilities" });
  }catch(error){
    next(error);
  }
}