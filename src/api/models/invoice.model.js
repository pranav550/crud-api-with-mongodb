import mongoose, { mongo } from "mongoose";
const Schema = mongoose.Schema;
const InvoiceSchema = new Schema({
  item: {
    type: String,
    required: true
  },
  qty: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  due: {
    type: Date,
    required: true
  },
  rate: {
    type: Number
  },
  tax: {
    type: Number
  }
});

export default mongoose.model("Invoice", InvoiceSchema);
