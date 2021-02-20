import { config } from "dotenv-safe";

config();

export default {
    telegramBotToken: process.env.TELEGRAM_BOT_TOKEN,
    lichess: {
        clientID: process.env.LICHESS_CLIENT_ID,
        clientSecret: process.env.LICHESS_CLIENT_SECRET,
    },
    mongodb: {
        dbName: process.env.MONGODB_DATABASE_NAME,
        dbUserName: process.env.MONGODB_DATABASE_USERNAME,
        dbPassword: process.env.MONGODB_DATABASE_PASSWORD,
    },
    server: {
        port: 3000,
    }
};
