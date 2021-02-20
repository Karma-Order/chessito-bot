import DBConnector from "../database/connectors/index.js";

export default class LichessModel {

    constructor() {
        this.connector = new DBConnector().getConnector();
        this.connector.connect();
    }

    login(chatId) {
        console.log(chatId);
    }

    getLiveGames() {
        console.log("getLiveGames");
    }
}
