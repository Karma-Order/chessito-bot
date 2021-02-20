import conf from "../../conf/index.js";
import MongooseConnector from "./mongoose.js";

export default class DBConnector {

    constructor() {
        this.connectorType = conf.database.connector;
        this.connector = null;
    }

    getConnector() {
        if (this.connector !== null) {
            return this.connector;
        }

        if (this.connectorType === "Mongoose") {
            this.connector = new MongooseConnector();
        } else {
            // default connector
            this.connector = new MongooseConnector();
        }

        return this.connector;
    }

}
