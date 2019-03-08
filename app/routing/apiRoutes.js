var path = require("path");
var friends = require("../data/friends");

module.exports = function (app) {

    app.get("/data/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/data/friends", function (req, res) {
        var newScore = req.body.scores;
        var scores = [];
        var newFriend = 0;

        for (var i = 0; i < friends.length; i++) {

            var diffInScore = 0;

            for (var j = 0; j < newScore.length; j++) {
                diffInScore += (Math.abs(parseInt(friends[i].scores[j] - parseInt(newScore[j]))));
            }
            scores.push(diffInScore);
        }

        for(var i = 0; i < scores.length; i++){
            if(scores[i] <= scores[newFriend]){
                newFriend = i;
            } 
        }
    
        var newFriend = friends[newFriend];
        res.json(newFriend);
    
    });

};
