import {Router} from 'express';
import blogsRouter from './blogs';
import blogtagsRouter from './blogtags';
import profileRouter from "./profile";
import contactRouter from "./contact";
import donateRouter from "./donate";

const router = Router()

router.use("/blogs", blogsRouter);
router.use("/blogtags", blogtagsRouter);
router.use("/profile", profileRouter);
router.use("/contact", contactRouter);
router.use("/donate", donateRouter);
export default router;