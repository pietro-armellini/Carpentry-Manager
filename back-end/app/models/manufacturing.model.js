module.exports = (sequelize, Sequelize) => {
    const Manufacturing = sequelize.define("manufacturing", {
        name: {
            type: Sequelize.STRING,
            primaryKey: true,
            allowNull: false
        }
    });
    return Manufacturing;
};