import express from "express";
import passport from "passport";
import { Strategy } from "passport-lichess";

const app = express();
const port = 3000;
app.listen(port);

const LichessStrategy = new Strategy(
    {
        clientID: 'AIrxNTnLSMQmJmoF',
        clientSecret: '2kWJxQFNczrfOKDCGTJ7kBtSeZxawQ1C',
        callbackURL: `http://localhost:${port}/auth/lichess/callback`,
    },
    (_accessToken, refreshToken, profile, cb) => {
        console.log(profile);
    }
);

export function login(credentials) {
    console.log(credentials);
    passport.use(LichessStrategy);
}

export function getLiveGames() {
    console.log("getLiveGames");
}

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/auth/lichess", passport.authenticate(LichessStrategy));

app.get(
    "/auth/lichess/callback",
    passport.authenticate(LichessStrategy, { failureRedirect: "/login" }),
    (req, res) => {
        res.redirect("/");
    }
);
