module.exports = (sequelize, Sequelize) => {
    const Activity = sequelize.define("activity", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
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