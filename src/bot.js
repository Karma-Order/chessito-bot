const { Telegraf } = require('telegraf')

module.exports = (conf) => {
    
    class Bot {

        constructor() {
            this.bot = new Telegraf(conf.token)
            this.bindEvents();
        }

        launch() {
            this.bot.launch();
        }

        bindEvents() {
            this.bot.start(ctx => ctx.reply('Hola Mario!!'));
        }

    }
    return new Bot();
};
