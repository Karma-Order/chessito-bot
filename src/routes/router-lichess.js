import lichessStrategy from "./strategies/lichess-strategy.js";

export default class LichessRouter {
    constructor(app, passport) {
        this.app = app;
        this.passport = passport;
        this.passport.use(lichessStrategy);
    }

    registerRoutes() {
        this.app.get(
            "/auth/lichess",
            this.passport.authenticate('lichess')
        );

        this.app.get(
            "/auth/lichess/callback",
            this.passport.authenticate('lichess', {
                failureRedirect: "/login",
            }),
            (req, res) => {
                res.redirect("/");
            }
        );
    }
}
