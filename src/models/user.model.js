import DBConnector from "../database/db-connector.js";
import { userSchema } from "../database/schemas.js";

export default class UserModel {
    constructor() {
        this.connector = new DBConnector();
        this.connection = this.connector.connect();
        this.user = this.connector.buildModel("User", userSchema);
    }

    login(chatId) {
        console.log(chatId);
    }

    getLiveGames() {
        console.log("getLiveGames");
    }
}
