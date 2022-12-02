fs = require("fs");

const db_dir = "./app/database/";

class TasksController{
    calendar_page(req,res,next){
      var user_list = JSON.parse(fs.readFileSync(db_dir + 'user_info.json'));
      res.send(user_list);
    }
}

module.exports = new TasksController();