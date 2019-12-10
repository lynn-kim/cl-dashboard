const Router = require("express").Router;
const accomplishment = require("./../../controllers/accomplishment");
const accRouter = Router();

accRouter.get("/items", accomplishment.get);
accRouter.post("/items", accomplishment.add);
accRouter.delete("/items", accomplishment.remove);

module.exports = accRouter;
