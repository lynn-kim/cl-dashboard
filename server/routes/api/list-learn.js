const Router = require("express").Router;
const learn = require("./../../controllers/learn");
const learnRouter = Router();

learnRouter.get("/items", learn.get);
learnRouter.post("/items", learn.add);
learnRouter.delete("/items", learn.remove);

module.exports = learnRouter;
