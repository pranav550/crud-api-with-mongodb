import invoicesController from "./controllers/invoicesController";
import express from "express";

export const router = express.Router();

router.get("/invoices", invoicesController.findAll);

router.post("/invoices", invoicesController.create);
