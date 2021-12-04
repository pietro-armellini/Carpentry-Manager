module.exports = app => {
    const commissions = require("../controllers/commission.controller.js");

    let router = require("express").Router();

    // Retrieve all Commissions
    router.get("/", commissions.findAll);

    app.use('/api/commissions', router);
};