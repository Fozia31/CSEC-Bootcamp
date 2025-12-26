import express from "express";
import contactRouter from './routes/contact.route.js';
import aboutRouter from './routes/about.route.js';
import homeRouter from './routes/home.route.js';
import timeRouter from "./routes/time.route.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(contactRouter);
app.use(aboutRouter);
app.use(homeRouter);
app.use(timeRouter);


app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

app.listen(port , () =>{
    console.log(`Example app listening on port http://localhost:${port}`);
})