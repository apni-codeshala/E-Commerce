import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    seller_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Seller",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
    },
    description: {
      type: String,
    },
    productImages: [
      {
        type: String,
      },
    ],
    thumbnail: {
      type: String,
      required: true,
    },
    actualPrice: {
      type: Number,
      required: true,
    },
    percentageOff: {
      type: Number,
    },
    stocks: {
      type: Number,
      required: true,
    },
    tags: [
      {
        type: String,
      },
    ],
    highlights: {
      type: mongoose.Schema.Types.Mixed,
    },
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    categorySpecificProperties: {
      type: mongoose.Schema.Types.Mixed,
    },
  },
  { timestamps: true },
);

const Product = mongoose.model("Product", productSchema);
export default Product;
