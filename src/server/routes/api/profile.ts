import { Router } from 'express';
import * as passport from "passport";

const router = Router();

//GET /api/profile
router.get("/", passport.authenticate('jtw'), (req, res) => {
    res.json(req.user);
} );

export default router;