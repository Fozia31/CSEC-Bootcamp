import express from "express";
import getContactController from '../controllers/contact/getContactController.js';
import postContactController from '../controllers/contact/postContactController.js';


const contactRouter = express.Router();


contactRouter.get("/contact",getContactController);
contactRouter.post("/contact/:id",postContactController)

export default contactRouter;