import { Router } from "express";
import db from "../../db";

const router = Router();

//GET one
router.get("/", async (req, res) => {
      res.json("TEST GET");
  });

//POST
router.post("/", async (req, res) => {
    res.json("TEST POST")
     
});

export default router;

