import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    product_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    atPrice: {
      type: Number,
      required: true,
    },
    modeOfPayment: {
      type: String,
      enum: ["Online", "Cash on delivery"],
      default: "Cash on delivery",
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    delivered: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true },
);

const Order = mongoose.model("Order", orderSchema);
export default Order;
