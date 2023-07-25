import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import cors from "cors";
import courseRouter from './routers/course.router';
import userRouter from './routers/user.router';
import { dbConnect } from './configs/database.config';

dbConnect();

const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.use(cors({
  credentials: true,
  origin: ["http://localhost:4200"]
}));

//send req to router
app.use("/api/courses", courseRouter);
app.use("/api/users", userRouter);


const port = 5000;
app.listen(port, () => {
  console.log("Website served on http://localhost:" + port);
})
