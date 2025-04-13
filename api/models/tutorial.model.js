module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("use", {
      tg_id: {
        type: Sequelize.BIGINT
      },
      stars: {
        type: Sequelize.INTEGER
      },
      level: {
        type: Sequelize.INTEGER
      },
      preplevel: {
        type: Sequelize.INTEGER
      }
    });
  
    return Tutorial;
  };