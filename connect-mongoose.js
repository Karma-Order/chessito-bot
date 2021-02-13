import mongoose from 'mongoose';
import conf from "./src/conf/index.js";

const { dbUserName, dbPassword, dbName } = conf.mongodb;                                                                                                                  
const url = `mongodb+srv://${dbUserName}:${dbPassword}@karma-order.g4csj.mongodb.net/${dbName}?retryWrites=true&w=majority`;

async function run() {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log("Connected correctly to server");
    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await mongoose.connection.close();
    }
}
run().catch(console.dir);
