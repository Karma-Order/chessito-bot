import { login, getLiveGames } from "../models/lichess.js";

export default class LichessService {

    constructor(credentials) {
        this.credentials = credentials;
    }

    login() {
        return login(this.credentials);
    }

    getLiveGames() {
        return getLiveGames();
    }
}