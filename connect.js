import mongodb from 'mongodb';
import conf from "./src/conf/index.js";

const { MongoClient } = mongodb;   
const { dbUserName, dbPassword, dbName } = conf.mongodb;                                                                                                                  
const url = `mongodb+srv://${dbUserName}:${dbPassword}@karma-order.g4csj.mongodb.net/${dbName}?retryWrites=true&w=majority`;

const client = new MongoClient(url);
async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");
    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}
run().catch(console.dir);