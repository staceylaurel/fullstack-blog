import {Router} from 'express';
import blogsRouter from './blogs';
import blogtagsRouter from './blogtags';
import profileRouter from "./profile";
import contactRouter from "./contact";

const router = Router()

router.use("/blogs", blogsRouter);
router.use("/blogtags", blogtagsRouter);
router.use("/profile", profileRouter);
router.use("/contact", contactRouter);
export default router;