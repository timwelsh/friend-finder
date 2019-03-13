const express = require("express");
require("dotenv").config();
var keys = require("./keys.js");

require("./routing/htmlRoute")(app);
require("./routing/apiRoutes")(app);

