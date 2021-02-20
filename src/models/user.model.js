import DBConnector from "./db-connector.js";

export default class UserModel {

    constructor() {
        this.connector = new DBConnector();
        this.connector.connect();
    }

    login(chatId) {
        console.log(chatId);
    }

    getLiveGames() {
        console.log("getLiveGames");
    }
}
