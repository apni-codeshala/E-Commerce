import mongoose from "mongoose";

const sellerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    addressLine1: {
      type: String,
      required: true,
    },
    addressLine2: {
      type: String,
    },
    state: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    contactNo: {
      type: Number,
      required: true,
      validate: {
        validator: function (v) {
          return v.toString().length === 10;
        },
        message: "Contact number must be 10 digits long",
      },
    },
    aadharNumber: {
      type: Number,
      required: true,
      validate: {
        validator: function (v) {
          return v.toString().length === 12;
        },
        message: "Aadhaar number must be 12 digits long",
      },
    },
    panNumber: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
          return panRegex.test(v);
        },
        message:
          "PAN number must be in the format: 5 letters, 4 digits, 1 letter (e.g., ABCDE1234F)",
      },
    },
    approved: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true },
);

const Seller = mongoose.model("Seller", sellerSchema);
export default Seller;
