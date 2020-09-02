import { Router } from "express";
import { charge } from "../../utils/stripe";

const router = Router();

//POST one
router.post("/", async (req, res) => {
  const newCharge = req.body;
  try {
    const result = await charge(newCharge.token, newCharge.amount);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "It done broke",
      error,
    });
  }
});

export default router;
