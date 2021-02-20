import LichessModel from "../../models/lichess.js";
import DBConnector from "../../database/connectors/index.js";

export default class LichessService {

    constructor(credentials) {
        this.credentials = credentials;
        this.lichessModel = new LichessModel(DBConnector);
    }

    login(chatId) {
        this.lichessModel.login(chatId);
        return `https://chessito.org/auth/lichess?chat_id=${chatId}`;
    }

    getLiveGames() {
        return this.lichessModel.getLiveGames();
    }
}
