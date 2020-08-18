import { Router } from "express";
import db from "../db";

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

//POST
router.post("/", async (req, res) => {
  try {
    const newBlog = req.body;

    const results = await db.blogs.insert(
      newBlog.authorid,
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

//PUT body
router.put("/:id", async (req, res) => {
  //try catch block
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
router.delete("/:id", async (req, res) => {
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
