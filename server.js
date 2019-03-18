const express = require("express");
const exphbs = require("express-handlebars");
const characters = require("./app/data/characters")
const app = express();

const PORT = process.env.PORT || 8080;

// for POST request in express
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoute")(app);

// listener
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });

