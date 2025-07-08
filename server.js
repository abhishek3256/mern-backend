import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute.js";
dotenv.config();

const app = express();

// mongoose
//   .connect(`mongodb://${dbuser}:${dbpass}@localhost:27017/lpu?authsource=admin`)
//   .then(() => {
//     app.listen(8080, () => {
//       console.log("Server started");
//     });
//   });

mongoose
  .connect(`mongodb+srv://penfighterveteran:6f0eK9qXWMTupH35@lpua.c2lnlun.mongodb.net/mernapp?retryWrites=true&w=majority
`)
  .then(() => {
    app.listen(8080, () => {
      console.log("Server started");
    });
  });
app.use(express.json());
app.use("/api/users", userRouter);