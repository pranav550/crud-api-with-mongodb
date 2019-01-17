import express from "express";
import { router } from "./api/routes";
import mongoose from "mongoose";
mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://localhost/invoice",
  { useNewUrlParser: true }
);

const app = express();

const port = process.env.port || 3000;

app.use("/api", router);

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.json({
    error: {
      message: error.message
    }
  });
});

app.listen(port, () => {
  console.log("server started");
});
