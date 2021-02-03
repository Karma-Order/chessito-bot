import { config } from "dotenv-safe";

config();
export default {
    telegramBotToken: process.env.TELEGRAM_BOT_TOKEN,
    lichessApiToken: process.env.LICHESS_API_TOKEN,
};
