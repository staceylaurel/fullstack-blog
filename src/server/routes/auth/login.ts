import { Router } from "express";
import { createToken } from "../../utils/tokens";
import db from "../../db";
import * as passport from "passport"

const router = Router();

//POST
router.post("/", passport.authenticate("local"), async (req: any, res) => {
    const token = createToken({userid: req.user.id});
    res.json(token) 
     
});

export default router;