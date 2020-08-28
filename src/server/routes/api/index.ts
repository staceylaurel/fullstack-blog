import {Router} from 'express';
import blogsRouter from './blogs';
import blogtagsRouter from './blogtags';
import profileRouter from "./profile";

const router = Router()

router.use("/blogs", blogsRouter);
router.use("/blogtags", blogtagsRouter);
router.use("/profile", profileRouter);
export default router;