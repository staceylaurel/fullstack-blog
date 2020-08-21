import { Router } from "express";
import db from "../../db";

const router = Router();

//GET one
router.get("/auth/login", async (req, res) => {
      res.json("TEST GET");
  });

//POST
router.post("/auth/login", async (req, res) => {
    res.json("TEST POST")
     
});

export default router;