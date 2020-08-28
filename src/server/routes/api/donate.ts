import { Router } from "express";
import db from "../../db";
import * as passport from "passport";

const router = Router();

//POST
router.post("/", passport.authenticate("jwt"), async (req: any, res) => {
    try {
        const amount = Number(req.params.amount);
        const newDonor = await db.donate.thisnewDonor(any);
        res.json(newDonor);
  
      const results = await db.donate.insert(
        newDonor,
        amount
      ); 
  
  
      if (newDonor.tagid) {
        await db.donate.insert(
          results.insertId, 
          newDonor.tagid
          )
      } 
        
   
      res.json(results); //done
    } catch (error) {
      console.log(error);
      res.status(500).json({
        msg: "It done broke",
        error,
      });
    }
  });
  
  export default router;