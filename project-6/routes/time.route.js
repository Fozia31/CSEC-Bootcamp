import express from "express";
import getTimeController from "../controllers/time/getTimeController.js";

const timeRouter = express.Router();

timeRouter.get("/time",getTimeController)

export default timeRouter ;