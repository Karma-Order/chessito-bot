import conf from "./src/conf/index";
import Bot from "./src/bot";
import Lichess from "./src/lichess/lichess";

const lichess = new Lichess(conf.lichessApiToken);
const bot = new Bot(conf.telegramBotToken, lichess);
bot.launch();
