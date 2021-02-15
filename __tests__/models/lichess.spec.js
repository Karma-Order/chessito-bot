import LichessModel from "../../src/models/lichess.js";

const lichessModel = new LichessModel();

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
