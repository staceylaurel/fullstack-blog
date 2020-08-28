import { Router } from "express";
import db from "../../db";
import * as passport from "passport";

const router = Router();


//POST
router.post("/", passport.authenticate("jwt"), async (req: any, res) => {
    try {
      const name = req.body;
      const subject = req.body;
      const message = req.body;;
  
      const results = await db.contact.insert(
        name, 
        subject, 
        message
      ); 
  
  
      if (newContact.tagid) {
        await db.contact.insert(
          results.insertId, 
          newContact.tagid
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