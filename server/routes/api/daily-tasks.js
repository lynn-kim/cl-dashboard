const Router = require("express").Router;
const dailyTasks = require("./../../controllers/daily-tasks");

const tasksRouter = Router();

tasksRouter.get("/items", dailyTasks.get);
tasksRouter.get("/items/archive", dailyTasks.getArchive);
tasksRouter.post("/items", dailyTasks.add);
tasksRouter.delete("/items", dailyTasks.remove);

module.exports = tasksRouter;
