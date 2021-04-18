import lichessStrategy from "./lichess-strategy.js";

export default class LichessRouter {
    constructor(app, passport) {
        this.app = app;
        this.passport = passport;
        this.passport.use(lichessStrategy);
        app.use(passport.initialize());
        app.use(passport.session());
        passport.serializeUser((user, done) => {
            console.log('serialize');
            done(null, user);
        });
          
        passport.deserializeUser((user, done) => {
            done(null, user);
        });
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
            (err, res) => {
                res.redirect("/");
            }
        );
    }
}
