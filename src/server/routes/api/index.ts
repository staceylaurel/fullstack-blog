import {Router} from 'express';
import blogsRouter from './blogs';
import blogtagsRouter from './blogtags';
import profilRouter from "./profile";

const router = Router()

router.use("/blogs", blogsRouter);
router.use("/blogtags", blogtagsRouter);
router.use("/profile", profilRouter);
export default router;