const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// Use Cross Origin Resource Sharing
app.use(cors());
// Use helmet
app.use(helmet());

app.get("/api/v1", (req, res) => {
  res.json({
    message: "API for fetching everchanging public image list from flickr",
  });
});

module.exports = app;
