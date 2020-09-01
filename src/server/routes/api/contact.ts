import * as passport from "passport";
import { Router } from "express";
import { sendEmail } from "../../utils/mailgun";

const router = Router();

//POST one
router.post("/", async (req, res) => {
  try {
    const contactEmail = req.body;
    const result = await sendEmail(
      "stacey.laurel@gmail.com",
      contactEmail.email,
      contactEmail.subject,
      contactEmail.body
    );
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
