import { login } from "./lichess-api.js";

export default class Lichess {

    constructor(credentials) {
        this.credentials = credentials;
    }

    login() {
        return login(this.credentials);
    }
}
