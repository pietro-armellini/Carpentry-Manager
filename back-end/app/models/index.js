const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.activity = require("./activity.model.js")(sequelize, Sequelize);
db.commission =  require("./commission.model.js")(sequelize, Sequelize);
db.manufacturing = require("./manufacturing.model.js")(sequelize, Sequelize);

db.activity.belongsTo(db.commission, {foreignKey: {name: 'commissionName', allowNull: false }});
db.activity.belongsTo(db.manufacturing, {foreignKey: {name: 'manufacturingName', allowNull: false }});

db.populate = async () => {
    await require("../seeds/commission.seed").populate(db.commission);
    await require("../seeds/manufacturing.seed").populate(db.manufacturing);
    await require("../seeds/activity.seed").populate(db.activity);
}

module.exports = db;