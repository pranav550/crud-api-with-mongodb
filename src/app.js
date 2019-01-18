import express from "express";
import mongoose from "mongoose";
import logger from "morgan";
import { router } from "./api/routes";

const app = express();
const port = process.env.port || 3000;

mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://localhost/invoices",
  { useNewUrlParser: true }
);

app.use(express.json());
app.use(express.urlencoded());
app.use(logger("dev"));
app.use("/api", router);

app.use((req, res, next) => {
  const error = new Error("Not Defined");
  error.message = "Invalid Route";
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to node js"
  });
});

app.listen(port, () => {
  console.log("server started");
});
