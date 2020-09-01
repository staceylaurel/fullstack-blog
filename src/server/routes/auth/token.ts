import * as passport from "passport";
import { Router } from "express";

const router = Router();

//GET one
router.get("/verify", passport.authenticate('jwt'), async (req, res) => {
      res.sendStatus(200);
  });

export default router;