import { Telegraf } from "telegraf";

export default class Bot {
    constructor(token, lichess) {
        this.bot = new Telegraf(token);
        this.lichess = lichess;
        this.bindEvents();
    }

    launch() {
        this.bot.launch();
    }

    bindEvents() {
        console.log(this.lichess);
        this.bot.start((ctx) => ctx.reply("Hola Mario!!"));
    }
}
