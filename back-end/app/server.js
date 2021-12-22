const express = require("express");
const cors = require("cors");
const logger = require('morgan');

const app = express();

let corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(logger('dev'))

//add routes
require("./routes/activity.routes")(app);
require("./routes/commission.routes")(app);
require("./routes/manufacturing.routes")(app);
require('./docs')(app);

// simple route
app.get("/api", (req, res) =>
    res.json({ message: "Welcome to G06 API." })
);

module.exports = app;