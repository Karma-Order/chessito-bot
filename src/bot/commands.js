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
                ctx.reply('login');
                lichess.login();
            },
        
            livegames(ctx) {
                ctx.reply('handlelivegames');
                lichess.getLiveGames();
            },
        }
    }


}