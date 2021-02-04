import { config } from "dotenv-safe";

config();

export default {
    telegramBotToken: process.env.TELEGRAM_BOT_TOKEN,
    lichess: {
        clientID: process.env.LICHESS_CLIENT_ID,
        clientSecret: process.env.LICHESS_CLIENT_SECRET,
    },
};
