import { Telegraf } from "telegraf";
import Commands from "./commands.js"
import LichessService from "../services/lichess.js";


export default class Bot {
    constructor(conf) {
        this.bot = new Telegraf(conf.telegramBotToken);
        this.lichess =  new LichessService(conf.lichess);
        this.bindEvents();
    }

    launch() {
        this.bot.launch();
    }

    bindEvents() {
        const commands = new Commands(this.lichess);
        Object.entries(commands.list).forEach(([commandName, handler]) => {
            this.bot.command(commandName, handler);
        });
        this.bot.on('text', (ctx) => {
            ctx.replyWithMarkdown('[Lichess](https://lichess.org)');
            ctx.replyWithHTML('<a href="https://lichess.org">Lichess</a>');
        })
    }
}
