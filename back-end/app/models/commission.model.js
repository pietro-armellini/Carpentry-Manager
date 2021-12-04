module.exports = (sequelize, Sequelize) => {
    const Commission = sequelize.define("commission", {
        name: {
            type: Sequelize.STRING,
            primaryKey: true,
            allowNull: false
        },
    });
    return Commission;
};