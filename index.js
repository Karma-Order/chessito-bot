import conf from "./src/conf/index.js";
import Bot from "./src/bot/bot.js";
import Lichess from "./src/lichess/lichess.js";

const lichess = new Lichess(conf.lichess);
const bot = new Bot(conf.telegramBotToken, lichess);
bot.launch();
