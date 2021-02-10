import conf from "./src/conf/index.js";
import Bot from "./src/bot/bot.js";

const bot = new Bot(conf);
bot.launch();
