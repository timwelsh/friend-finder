const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

const PORT = process.env.PORT || 8080;

require("./routes/apiRoutes")(app);
require("./routes/htmlRoute")(app);


app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });

