module.exports = app => {
    const manufacturing = require("../controllers/manufacturing.controller.js");

    let router = require("express").Router();

    // Retrieve all manufacturing
    router.get("/", manufacturing.findAll);

    // Retrieve a single manufacturing with id
    router.get("/:id", manufacturing.findOne);

    app.use('/api/commissions', router);
};