import express from "express";
import getAboutController from '../controllers/about/getAboutController.js';
import postAboutController from '../controllers/about/postAboutController.js';

const aboutRouter = express.Router();

aboutRouter.get("/about",getAboutController);
aboutRouter.post("/about",postAboutController)


export default aboutRouter;