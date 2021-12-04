const express = require("express");
const cors = require("cors");
const db = require("./app/models");

//----------------------
//database syncing

//for production
//db.sequelize.sync().then(() => db.populate());

//for development
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
    db.populate().then( () => console.log("Db populated."))
});
//----------------------

const app = express();

let corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//add routes
require("./app/routes/activity.routes")(app);
require("./app/routes/commission.routes")(app);
require("./app/routes/manufacturing.routes")(app);

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to G06 middleware." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});