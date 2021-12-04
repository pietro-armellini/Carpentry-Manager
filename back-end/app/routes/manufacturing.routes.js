module.exports = app => {
    const manufacturing = require("../controllers/manufacturing.controller.js");

    let router = require("express").Router();

    // Retrieve all manufacturing
    router.get("/", manufacturing.findAll);

    app.use('/api/manufacturing', router);
};