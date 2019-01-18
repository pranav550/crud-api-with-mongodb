import express from "express";
import invoiceController from "./controllers/invoiceControllers";
export const router = express.Router();

router.get("/invoices", invoiceController.findAll);
router.get("/invoices/:id", invoiceController.findOne);
router.delete("/invoices/:id", invoiceController.delete);
router.put("/invoices/:id", invoiceController.update);
router.post("/invoices", invoiceController.create);
