const fs = require("fs");

const db_dir = "./app/database/";
var user_list = JSON.parse(fs.readFileSync(db_dir + 'user_info.json'));
var tasks_list = JSON.parse(fs.readFileSync(db_dir + 'tasks_info.json'));
var tasks_info = JSON.parse(fs.readFileSync(db_dir + 'tasks_info.json'));
class TasksController{
    calendar_page(req,res,next){
      var output_task = {
        "all_days_tasks":[]
      };
      for(var i = 0; i< tasks_list.all_days_tasks.length;i++){
        var temp_task =tasks_list.all_days_tasks[i]; // Shorten each all_days_tasks
        var temp_obj = {}; // Hold new datainput;
        temp_obj["date"] = temp_task.date; // Hold new date of datainput
        temp_obj["team_list"] = []; // Hold list of team of data input
        // Loop to input team_id to team_list
        for (var j = 0; j<temp_task.all_tasks_detail.length;j++){
          var temp_teamid = {}; // Object to hold new team_id
          temp_teamid = temp_task.all_tasks_detail[j].team_id; 
          temp_obj.team_list.push(temp_teamid);
        }
        output_task.all_days_tasks.push(temp_obj);
        console.log() 
      }
      var output_taskanduser = {};
      output_taskanduser["user_info"] = user_list[0];
      output_taskanduser["all_days_task"] = output_task["all_days_tasks"];

      res.send(output_taskanduser);

    }

    one_day(req, res, next){
      var returnObj = {};

      returnObj["user_name"] = user_list[0]["user_name"];
      returnObj["date"] = tasks_info.all_days_tasks[0]["date"];
      returnObj["all_tasks_detail"] = tasks_info.all_days_tasks[0]["all_tasks_detail"];

      res.send(returnObj);
    }
}

module.exports = new TasksController();