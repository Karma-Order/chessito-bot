import conf from "./src/conf/index.js";
import Bot from "./src/bot.js";
import Lichess from "./src/lichess/lichess.js";

const lichess = new Lichess(conf.lichessApiToken);
const bot = new Bot(conf.telegramBotToken, lichess);
bot.launch();
