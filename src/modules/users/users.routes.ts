
import { Router } from "express";

import auth from "../../middleware/auth";
import { userControllers } from "./users.controller";


const router = Router();

router.post("/auth/signup",userControllers.createUser);
router.get("/users",auth("admin"), userControllers.getAllUser);
router.put("/users/:userId", auth("admin","customer"),userControllers.updateUser)

export const  userRoutes = router;