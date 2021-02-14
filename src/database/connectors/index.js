import conf from "../../conf/index.js";
import MongooseConnector from "./mongoose.js";

export default class DBConnector {

    constructor() {
        this.connector = conf.database.connector;
    }

    getConnector() {
        if (this.connector === "Mongoose") {
            return new MongooseConnector();
        }
        return new MongooseConnector();
    }

}
