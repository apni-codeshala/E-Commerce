import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    otp: {
      type: String,
      length: 6,
      default: 171019,
    },
    isVerified: {
      type: Boolean,
      require: true,
      default: false,
    },
    otpValidTill: {
      type: Date,
      require: true,
    },
  },
  { timestamps: true },
);

UserSchema.pre("save", function (next) {
  // user password encryption
  const user = this;
  const SALT = bcrypt.genSaltSync(9);
  const encryptedPassword = bcrypt.hashSync(user.password, SALT);
  user.password = encryptedPassword;

  // user otp generation
  let digits = "0123456789";
  let OTP = "";
  let len = digits.length;
  for (let i = 0; i < 6; i++) {
    OTP += digits[Math.floor(Math.random() * len)];
  }
  user.otp = OTP;

  // otpValidTill
  const d = new Date();
  d.setMinutes(d.getMinutes() + 10);
  user.otpValidTill = d;

  next();
});

UserSchema.methods.comparePassword = function compare(password) {
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model("user", UserSchema);
export default User;
