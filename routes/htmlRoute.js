// A GET Route to /survey which should display the survey page.
// A default, catch-all route that leads to home.html which displays the home page.

const path = require("path");

module.exports = function(app) {

    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });


    //If no matching routes go to default of home
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"))
    });

}

// applicationCache.get("/tables", funciton(req, res) {
//     res.sendFile(path.join(__dirname, "../public/tables.html"))
// });

