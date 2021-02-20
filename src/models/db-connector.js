import mongoose from 'mongoose';
import conf from "../conf/index.js";

export default class DBConnector {

    constructor() {
        const { dbUserName, dbPassword, dbName } = conf.mongodb;
        this.url = `mongodb+srv://${dbUserName}:${dbPassword}@karma-order.g4csj.mongodb.net/${dbName}?retryWrites=true&w=majority`;
    }

    async connect() {
        try {
            await mongoose.connect(this.url, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
                useCreateIndex: true
            });
            console.log("Connected correctly to server");
        } catch (err) {
            console.error(err.stack);
        }
    }

    disconnect() {
        mongoose.connection.close();
    }
}
