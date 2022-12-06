fs = require("fs");

const db_dir = "./app/database/";

var tasks_info = JSON.parse(fs.readFileSync(db_dir + 'tasks_info.json'));
var user_list = JSON.parse(fs.readFileSync(db_dir + 'user_info.json'));

class VehicleController{
  Vehicle_info(req, res, next){
    var vehicle_list = JSON.parse(fs.readFileSync(db_dir + 'resources_info.json'));
    var tasks_detail = tasks_info.all_tasks_detail;

    var returnObj = {
      "trollers":[],
      "trucks":[]
    };
    // Add list of vehicle , default team_id = -1
    for(var i = 0 ; i<vehicle_list.trucks.length;i++){
      var temp_obj = {
        "name" : vehicle_list.trucks[i],
        "team_id" : -1
      };
      returnObj.trucks.push(temp_obj);
    }
    for(var i = 0 ; i<vehicle_list.trollers.length;i++){
      var temp_obj = {
        "name" : vehicle_list.trollers[i],
        "team_id" : -1
      };
      returnObj.trollers.push(temp_obj);
    }
    // Update team_id
    var listofdays = tasks_info.all_days_tasks;
    for (var a = 0; a <listofdays.length; a ++){
      var each_days = listofdays[a].all_tasks_detail;
      for(var i = 0; i<each_days.length;i++){
        var a_task = each_days[i];
        var hold_team_id = a_task.team_id;
        // Update trucks
        var truck_list = a_task.resources.trucks;
        for(var j = 0; j<truck_list.length;j++){
          let obj = returnObj.trucks.find((o, f) => {
            if (o.name == truck_list[j] ) {
                returnObj.trucks[f].team_id = hold_team_id;
                return true; // stop searching
            }
          });
        }
        //Update troller
        var troller_list = a_task.resources.trollers;
        for(var j = 0; j<troller_list.length;j++){
          let obj = returnObj.trollers.find((o, f) => {
            if (o.name == troller_list[j] ) {
                returnObj.trollers[f].team_id = hold_team_id;
                return true; // stop searching
            }
          });
        }
      }
    }

    res.header("Access-Control-Allow-Origin", "*");
    res.send(returnObj);
  }
}

module.exports = new VehicleController();