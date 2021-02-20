import conf from "./src/conf/index.js";
import Bot from "./src/controllers/bot.controller.js";
import Router from "./src/routes/index.routes.js";

const router = new Router();
router.registerRoutes();

const bot = new Bot(conf);
bot.launch();
