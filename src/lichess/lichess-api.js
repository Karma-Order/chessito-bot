import { Strategy } from 'passport-lichess';
import passport from 'passport';

export function login(credentials) {
    console.log(credentials)
    passport.use(new Strategy({
        clientID: credentials.clientID,
        clientSecret: credentials.clientSecret,
        callbackURL: "http://127.0.0.1:3000/auth/lichess/callback"
      },
      function(accessToken, refreshToken, profile, cb) {
        User.findOrCreate({ lichessId: profile.id }, function (err, user) {
          return cb(err, user);
        });
      }
    ));

}

export function getLiveGames() {

}


 