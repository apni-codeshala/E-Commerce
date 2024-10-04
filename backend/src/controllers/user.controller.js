import UserService from "../services/user.service.js";

const userService = new UserService();

export const signup = async (req, res) => {
  try {
    console.log("Here in backend controller", req.body);
    const response = await userService.signup({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    return res.status(200).json({
      success: true,
      message: "Successfully created a new user",
      data: response,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong in creating the user",
      data: {},
      err: error,
    });
  }
};

export const otpVerification = async (req, res) => {
  try {
    const response = await userService.verifyOTP({
      email: req.body.email,
      otp: req.body.otp,
    });
    return res.status(200).json({
      success: true,
      message: "Successfully verified your email",
      data: response,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      success: false,
      message: "Email not verified",
      data: {},
      err: error,
    });
  }
};

export const generateNewOTP = async (req, res) => {
  try {
    const response = await userService.createEmailVerifyOTP({
      email: req.body.email,
    });
    return res.status(200).json({
      success: true,
      message: "Successfully created new OTP",
      data: response,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      success: false,
      message: "Not able to create new OTP",
      data: {},
      err: error,
    });
  }
};

export const signin = async (req, res) => {
  try {
    const response = await userService.signin({
      email: req.body.email,
      password: req.body.password,
    });
    return res.status(200).json({
      success: true,
      message: "Successfully signin user",
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong in signin the user",
      data: {},
      err: error.message,
    });
  }
};

export const isVerified = (req, res) => {
  try {
    if (!req.user || !req.email) {
      return res.status(500).json({
        success: false,
        message: "Login again, to verify your self",
        data: {},
      });
    }

    return res.status(200).json({
      success: true,
      message: "User is verified",
      data: {
        email: req.email,
        role: req.role,
      },
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: true,
      message: "User not verified",
      data: {},
      err: error,
    });
  }
};
