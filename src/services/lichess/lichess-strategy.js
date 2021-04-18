import { Strategy } from "passport-lichess";
import conf from "../../conf/index.js";

export default new Strategy(
    {
        clientID: conf.lichess.clientID,
        clientSecret: conf.lichess.clientSecret,
        callbackURL: `http://${conf.lichess.authDomain}:${conf.lichess.authPort}/auth/lichess/callback`,
    },
    (_accessToken, refreshToken, profile, cb) => {
        console.log(profile);
        return cb(null, profile);
    }
);