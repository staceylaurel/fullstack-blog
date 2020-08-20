import { Router } from "express";
import db from "../../db";

const router = Router();

router.get("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const tags = await db.blogtags.thisTags(id);
    res.json(tags);

  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "It done broke",
      error,
    });
  }
});

export default router;
//one is for queries one is for endpoints
