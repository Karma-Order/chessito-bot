import { Telegraf } from "telegraf";
import Commands from "./commands.js"

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
        const commands = new Commands(this.lichess);
        Object.entries(commands.commands).forEach(([commandName, handler]) => {
            this.bot.command(commandName, handler);
        });
    }
}
