import {Router} from 'express';
import login from './login';
import register from './register';
import token from './token';

const router = Router()

router.use("/login", loginRouter);
router.use("/register", registerRouter)
router.use("/token", tokenRouter)

export default router;