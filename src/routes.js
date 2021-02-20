import express from "express";
import passport from "passport";
import conf from "./conf/index.js";
import LichessRouter from "./services/lichess/router-lichess.js";

export default class Router {

    constructor() {
        this.app = express();
        this.app.listen(conf.server.port);
    }

    registerRoutes() {
        this.app.get("/", (req, res) => {
            res.send("Hello World!");
        });
        
        const lichessRouter = new LichessRouter(this.app, passport);
        lichessRouter.registerRoutes();
    }

}