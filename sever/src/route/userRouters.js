import express from "express";
import { getUserById } from "../controller/controllerUser";

const userRouter = express.Router();

userRouter.get("/getById", getUserById);

export default userRouter;
