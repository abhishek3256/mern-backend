import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./routes/userRoute.js";

dotenv.config();

const app = express();
app.use(cors());
const dbuser = process.env.DBUSER;
const dbpass = process.env.DBPASS;

mongoose
  .connect(`mongodb+srv://${dbuser}:${dbpass}@lpua.c2lnlun.mongodb.net/mernapp?retryWrites=true&w=majority`)
  .then(() => {
    app.listen(8080, () => {
      console.log("Server started");
    });
  });
app.use(express.json());
app.use("/api/users", userRouter);