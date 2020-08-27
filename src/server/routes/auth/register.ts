import { Router } from "express";
import { generateHash } from "../../utils/passwords";
import { createToken } from "../../utils/tokens";
import db from "../../db";
const router = Router();

//POST
router.post("/", async (req, res) => {

const newAuthor = req.body;
newAuthor.password = generateHash(newAuthor.password);

  try {
      const results= await db.authors.insert(newAuthor);
      const token = createToken({userid: results.insertId});
      res.json(token); 
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "It done broke",
      error,
    });
  }
});

export default router;
