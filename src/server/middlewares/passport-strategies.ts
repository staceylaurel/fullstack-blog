import * as passport from "passport";
import * as jwtStrategy from "passport-jwt";
import * as PassportLocal from "passport-local";
import db from "../db";
import config from "../config";
import { comparePasswords } from "../utils/passwords";
import type { IPayload } from "../utils/tokens";

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

passport.use(
  new PassportLocal.Strategy(
    { usernameField: "email" },
    async (email, password, done) => {
      try {
        // first thing make sure their email even exists in our db, find it!
        const [author] = await db.authors.find("email", email);
        // then we make sure they are real and that their password they're tring to login with matches what we store in our database
        if (author && comparePasswords(password, author.password)) {
          delete author.password;
          // this creates req.user with our user's info!
          done(null, author);
        } else {
          done(null, false);
        }
      } catch (error) {
        console.log(error);
        done(error);
      }
    }
  )
);

passport.use(
  new jwtStrategy.Strategy(
    {
      // this will find the token on our requests
      jwtFromRequest: jwtStrategy.ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.auth.secret,
    },
    async (payload: IPayload, done) => {
      try {
        const [author] = await db.authors.find("id", payload.userid);
        if (author) {
          delete author.password;
          done(null, author);
        } else {
          done(null, false);
        }
      } catch (error) {
        console.log(error);
        done(error);
      }
    }
  )
);
