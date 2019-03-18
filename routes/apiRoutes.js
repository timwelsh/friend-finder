// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

const characterData = require("../app/data/characters");


module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        // console.log(characterData);
        res.json(characterData);
    })

    app.post("/api/friends", function(req, res) {
        var myMatch;
        var returnArr = [];
        var totalArr = [];
        var total = 0;
        console.log(" Got here " + req)
        characterData.forEach(question => {
            var total = 0;
            total += Math.abs(parseInt(req.body.q1) - parseInt(question.q1))
            total += Math.abs(parseInt(req.body.q2) - parseInt(question.q2))
            total += Math.abs(parseInt(req.body.q3) - parseInt(question.q3))
            total += Math.abs(parseInt(req.body.q4) - parseInt(question.q4))
            total += Math.abs(parseInt(req.body.q5) - parseInt(question.q5))
            total += Math.abs(parseInt(req.body.q6) - parseInt(question.q6))
            total += Math.abs(parseInt(req.body.q7) - parseInt(question.q7))
            totalArr.push(total)
        });
        // for (let i = 0; i < totalArr.length; i++) {
        //     for (let j = 1; j < totalArr.length; j++) {
        //         if(totalArr[i] < totalArr[j])   myMatch = i
        //     }
        // }
        // returnArr.push(characterData[myMatch])

        // res.json(returnArr);
        // characterData.push(req.body);
    })
}