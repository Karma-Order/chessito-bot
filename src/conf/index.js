import { config } from "dotenv-safe";

config();
const { env } = process;
export default {
    telegramBotToken: env.TELEGRAM_BOT_TOKEN,
    lichess: {
        clientID: env.LICHESS_CLIENT_ID,
        clientSecret: env.LICHESS_CLIENT_SECRET,
        authDomain: env.CHESSITO_DOMAIN,
        authPort: env.CHESSITO_PORT
    },
    mongodb: {
        dbName: env.MONGODB_DATABASE_NAME,
        dbUserName: env.MONGODB_DATABASE_USERNAME,
        dbPassword: env.MONGODB_DATABASE_PASSWORD,
    },
    server: {
        port: env.CHESSITO_PORT
    },
    database: {
        connector: "Mongoose"
    }
};
