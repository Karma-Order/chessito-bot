export default class LichessModel {

    constructor(dbConnector) {
        this.connector = dbConnector.getConnector();
        this.connector.connect();
    }

    login(chatId) {
        console.log(chatId);
    }

    getLiveGames() {
        console.log("getLiveGames");
        return "getLiveGames";
    }
}
