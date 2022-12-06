fs = require("fs");

const db_dir = "./app/database/";

var teams_info = JSON.parse(fs.readFileSync(db_dir + 'teams_info.json'));
var resources_info = JSON.parse(fs.readFileSync(db_dir + 'resources_info.json'));

class TeamController{
    team_info(req, res, next){
        var all_teams_object = teams_info;
        var all_resources_info = {};
        var all_employees_info = [];

        // extract employess and resource info
        var trucks_array = [];
        var trollers_array = [];

        for (var i = 0; i < teams_info.length; i++){
            var single_team = teams_info[i];
            console.log(single_team);
            // employee info
            for (var i2 = 0; i2 < single_team["members"].length; i2++){
                var single_member = single_team["members"][i2];
                var tempObj = {};
                tempObj["name"] = single_member;
                tempObj["team_id"] = single_team["team_id"];

                all_employees_info.push(tempObj);
            }
            var leader_obj = {};
            leader_obj["name"] = single_team["leader"];
            leader_obj["team_id"] = single_team["team_id"];
            all_employees_info.push(leader_obj);

            // trucks info
            console.log(single_team["resources"]);
            for (var i2 = 0; i2 < single_team["resources"]["trucks"].length; i2++){
                var single_truck = single_team["resources"]["trucks"][i2];
                var tempObj = {}
                tempObj["name"] = single_truck;
                tempObj["team_id"] = single_team["team_id"];
                trucks_array.push(tempObj);
            }

            // trollers info
            for (var i2 = 0; i2 < single_team["resources"]["trollers"].length; i2++){
                var single_troller = single_team["resources"]["trollers"][i2];
                var tempObj = {};
                tempObj["name"] = single_troller;
                tempObj["team_id"] = single_team["team_id"];
                trollers_array.push(tempObj);
            }
        }
        all_resources_info["trucks"] = trucks_array;
        all_resources_info["trollers"] = trollers_array;

        // extract resources info

        var retObject = {};

        retObject["team_info"] = all_teams_object;
        retObject["resources"] = all_resources_info;
        retObject["employees"] = all_employees_info;

        res.header("Access-Control-Allow-Origin", "*");
        res.send(retObject);
    }
}

module.exports = new TeamController();