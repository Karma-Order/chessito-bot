export default class Commands {

    constructor(lichess) {
        this.commands = {
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