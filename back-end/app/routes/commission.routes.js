module.exports = app => {
    const commissions = require("../controllers/commission.controller.js");

    let router = require("express").Router();

    // Retrieve all Commissions
    router.get("/", commissions.findAll);

    // Retrieve a single Commission with id
    router.get("/:id", commissions.findOne);

    app.use('/api/commissions', router);
};