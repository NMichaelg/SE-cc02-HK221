fs = require("fs");

const db_dir = "./app/database/";

var tasks_info = JSON.parse(fs.readFileSync(db_dir + 'tasks_info.json'));
var user_list = JSON.parse(fs.readFileSync(db_dir + 'user_info.json'));

class TasksController{
    calendar_page(req,res,next){
      var user_list = JSON.parse(fs.readFileSync(db_dir + 'user_info.json'));
      res.send(user_list);
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