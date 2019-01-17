import express from "express";
import logger from "morgan";
import mongoose from "mongoose";

import { router } from "./api/routes";
const app = express();

const port = process.env.port || 3000;

mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://localhost/invoice",
  { useNewUrlParser: true }
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded());
app.use("/api", router);

app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.message = "Invalid Route";
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.json({
    error: {
      message: error.message
    }
  });
});

app.listen(port, () => {
  console.log("Server Started");
});
