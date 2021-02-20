import LichessModel from "./lichess.js";
import DBConnector from "../database/connectors/index.js";

const dbConnector = new DBConnector();
const lichessModel = new LichessModel(dbConnector);

describe("Login with Lichess", () => {
    test("void method", () => {
        lichessModel.login();
    });
});

describe("Get Live Games", () => {
    test("It should getLiveGames", () => {
        expect(lichessModel.getLiveGames()).toEqual("getLiveGames");
    });
});
