// fs = require("fs");

// var task_db_path = "./app/database/tasks_info.js"
// var task_db = JSON.parse(fs.readFileSync(task_db_path));

class TasksController{
    one_day(req, res, next){
        res.send(
            {
              "user_info":{
                "name": "Khoa"
              },
              
              "detail": [
                {
                  "date":  "20-11-2020",
                  "assignee": ["Khoa", "An"]
                },
                {
                  "date":  "20-11-2020",
                  "assignee": ["Khoa", "An"]
                },
                {
                  "date":  "20-11-2020",
                  "assignee": ["Khoa", "An"]
                },
              ]
            }
          );
    }

}

module.exports = new TasksController();