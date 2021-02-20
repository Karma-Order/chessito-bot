import User from "../models/user.model.js";

export default class LichessService {

    constructor(credentials) {
        this.credentials = credentials;
        this.user = new User(this.credentials);
    }

    login(chatId) {
        this.user.login(chatId);
        return `https://chessito.org/auth/lichess?chat_id=${chatId}`;
    }

    getLiveGames() {
        return this.user.getLiveGames();
    }
}
