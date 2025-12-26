import express from "express";
import getHomeController from '../controllers/home/getHomeController.js';
import postHomeController from '../controllers/home/postHomeController.js';

const homeRouter = express.Router();

homeRouter.get("/", getHomeController)
homeRouter.post("/", postHomeController)

export default homeRouter;