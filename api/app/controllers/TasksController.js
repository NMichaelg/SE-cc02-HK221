fs = require("fs");

const db_dir = "./app/database/";

var tasks_info = JSON.parse(fs.readFileSync(db_dir + 'tasks_info.json'));
var user_list = JSON.parse(fs.readFileSync(db_dir + 'user_info.json'));

class TasksController{
    MCP_detail(req,res,next){
      var returnObj = JSON.parse(fs.readFileSync(db_dir + 'mcps_info.json'));
      res.send(returnObj);
    }
}

module.exports = new TasksController();