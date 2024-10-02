import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"; // Make sure to import jwt
import dotenv from "dotenv";

dotenv.config();
const SECRET_KEY = process.env.JWT_SECRET;

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    otp: {
      type: String,
      length: 6,
      default: "171019",
    },
    isVerified: {
      type: Boolean,
      required: true,
      default: false,
    },
    otpValidTill: {
      type: Date,
    },
  },
  { timestamps: true },
);

UserSchema.pre("save", function (next) {
  // Encrypt user password
  if (this.isModified("password")) {
    const SALT = bcrypt.genSaltSync(9);
    this.password = bcrypt.hashSync(this.password, SALT);
  }
  next();
});

UserSchema.methods.comparePassword = function compare(password) {
  return bcrypt.compareSync(password, this.password);
};

UserSchema.methods.genOTP = function generateNewOTP() {
  const user = this;

  // Generate a 6-digit OTP
  const digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < 6; i++) {
    OTP += digits[Math.floor(Math.random() * digits.length)];
  }
  user.otp = OTP;

  // OTP valid till
  const now = new Date();
  user.otpValidTill = new Date(now.getTime() + 10 * 60000);

  return user;
};

UserSchema.methods.genJWT = function generate() {
  return jwt.sign({ id: this._id, email: this.email }, SECRET_KEY, {
    expiresIn: "1d",
  });
};

const User = mongoose.model("User", UserSchema);
export default User;
