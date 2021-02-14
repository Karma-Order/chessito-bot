import conf from "./src/conf/index.js";
import Bot from "./src/bot/bot.js";
import Router from "./src/routes.js";

const router = new Router();
router.registerRoutes();

const bot = new Bot(conf);
bot.launch();
