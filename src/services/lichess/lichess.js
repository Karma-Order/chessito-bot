import { login, getLiveGames } from "../../models/lichess.js";

export default class LichessService {

    constructor(credentials) {
        this.credentials = credentials;
    }

    login(chatId) {
        login(chatId);
        return `https://chessito.org/auth/lichess?chat_id=${chatId}`;
    }

    getLiveGames() {
        return getLiveGames();
    }
}