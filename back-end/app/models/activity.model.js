module.exports = (sequelize, Sequelize) => {
    const Activity = sequelize.define("activity", {
        id: {
          type: Sequelize.INTEGER
        },
        idUser: {
            type: Sequelize.INTEGER
        },
        idCommission: {
            type: Sequelize.INTEGER
        },
        idManufacturing: {
            type: Sequelize.INTEGER
        },
        date: {
            type: Sequelize.DATEONLY
        },
        notes: {
            type: Sequelize.STRING
        },
        time: {
            type: Sequelize.INTEGER
        }
    });
    return Activity;
};