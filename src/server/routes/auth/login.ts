import * as passport from "passport";
import { Router } from "express";
import { createToken } from "../../utils/tokens";

const router = Router();

//POST
router.post("/", passport.authenticate("local"), async (req: any, res) => {
    const token = createToken({userid: req.user.id});
    res.json(token) 
});

export default router;