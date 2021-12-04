module.exports = (sequelize, Sequelize) => {
    const Activity = sequelize.define("activity", {
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