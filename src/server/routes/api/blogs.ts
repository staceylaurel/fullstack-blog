import { Router } from "express";
import db from "../../db";
import * as passport from "passport";

const router = Router();

//GET all
router.get("/", async (req, res) => {
  try {
    const blogs = await db.blogs.all();
    res.json(blogs);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "It done broke",
      error,
    });
  }
});

//GET one
router.get("/:id?", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const [blog] = await db.blogs.one(id);
    res.json(blog);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "It done broke",
      error,
    });
  }
});

//POST api/blogs
//Request Body { title: string, content: string } 
//const authorid replaces "authorid: string" in Request Body
router.post("/", passport.authenticate("jwt"), async (req: any, res) => {
  try {
    const newBlog = req.body;
    const authorid = req.user.id;

    const results = await db.blogs.insert(
      authorid,
      newBlog.title,
      newBlog.content
    ); //blog


    if (newBlog.tagid) {
      await db.blogtags.insert(
        results.insertId, 
        newBlog.tagid
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

//PUT /api/blogs/id
//Request Body { title: string, content: string }
router.put("/:id", passport.authenticate("jwt"), async (req: any, res) => {
  const id = Number(req.params.id);
  const editedBlog = req.body;
  const results = await db.blogs.update(
    editedBlog.content,
    editedBlog.title,
    id
  );
  res.json(results);
});

//DELETE
router.delete("/:id", passport.authenticate("jwt"), async (req: any, res) => {
  //try catch block
  try {
    const id = Number(req.params.id);
    await db.blogtags.destroy(id);
    const results = await db.blogs.destroy(id);
    res.json(results);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "It done broke",
      error,
    });
  }
});

export default router;
