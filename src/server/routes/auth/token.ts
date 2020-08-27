import { Router } from "express";
import * as passport from "passport";

const router = Router();

//GET one
router.get("/verify", passport.authenticate('jwt'), async (req, res) => {
      res.sendStatus(200);
  });

export default router;

