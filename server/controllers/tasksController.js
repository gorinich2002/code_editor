const { join } = require('path');
const ApiError = require('../error/ApiError') 
const fs = require('fs').promises;

class TasksController {
    async getTaskList(req, res, next) {
        const tasks = await fs.readFile(join(__dirname ,'../','store',"tasks.json"));
        console.log(tasks)
        return res.json(tasks)
    }
}
module.exports = new TasksController()