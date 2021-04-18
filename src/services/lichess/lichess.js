import LichessModel from "../../models/lichess.js";

export default class LichessService {

    constructor(credentials) {
        this.credentials = credentials;
        this.lichessModel = new LichessModel(this.credentials);
    }

    login(chatId) {
        this.lichessModel.login(chatId);
        return `https://${this.credentials.authDomain}:${this.credentials.authPort}/auth/lichess?chat_id=${chatId}`;
    }

    getLiveGames() {
        return this.lichessModel.getLiveGames();
    }
}
