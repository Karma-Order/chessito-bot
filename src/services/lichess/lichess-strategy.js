import { Strategy } from "passport-lichess";
import conf from "../../conf/index.js";

export default new Strategy(
    {
        clientID: 'AIrxNTnLSMQmJmoF',
        clientSecret: '2kWJxQFNczrfOKDCGTJ7kBtSeZxawQ1C',
        callbackURL: `http://localhost:${conf.server.port}/auth/lichess/callback`,
    },
    (_accessToken, refreshToken, profile, cb) => {
        console.log(profile);
        console.log(cb);
    }
);