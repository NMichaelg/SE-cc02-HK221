fs = require("fs");

const db_dir = "./app/database/";

var areas_info = JSON.parse(fs.readFileSync(db_dir + 'areas_info.json'));

class AreasController{
    area_info(req, res, next){
        var areas_info_object = {};

        areas_info_object["area-info"] = areas_info;

        res.send(areas_info_object);
    }
}

module.exports = new AreasController();