export default class Commands {

    constructor(lichess) {
        this.list = this.getCommands(lichess);
    }

    getCommands(lichess) {
        return {
            start(ctx) {
                ctx.reply('start');
            },

            help(ctx) {
                ctx.reply('help');
            },
        
            login(ctx) {
                const url = lichess.login(ctx.message.chat.id);
                ctx.replyWithMarkdown(`[Login with Lichess](${url})`);
            },
        
            livegames(ctx) {
                ctx.reply('handlelivegames');
                lichess.getLiveGames();
            },
        }
    }


}