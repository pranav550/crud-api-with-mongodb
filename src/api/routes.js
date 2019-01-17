import express from "express";
import invoiceController from "./controllers/invoiceController";
export const router = express.Router();

router.get("/invoices", invoiceController.findAll);
router.post("/invoices", invoiceController.create);
