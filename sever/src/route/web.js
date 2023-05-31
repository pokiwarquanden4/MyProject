import express from "express";
import userRouter from "./userRouters";

let router = express.Router();

let initWebRoutes = (app) => {
  app.use("/users", userRouter);
};

export default initWebRoutes;
