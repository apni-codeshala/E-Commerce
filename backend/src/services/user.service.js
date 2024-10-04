import UserRepository from "../respository/user.repository.js";
import sendMail from "../utils/sendEmail.js";

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  // Signup
  /**
   * Creates a new user with a 6-digit OTP, sends a verification email,
   * and sets the verification time to now + 10 minutes.
   */
  async signup(data) {
    try {
      const user = await this.userRepository.create(data);
      user.genOTP(); // Generate OTP after user creation
      await user.save();
      await sendMail(user.email, user.otp);
      return "Created usere successfully";
    } catch (error) {
      console.error("Error creating user:", error);
      throw new Error("Failed to create user. Please try again.");
    }
  }

  async verifyOTP(data) {
    try {
      const user = await this.userRepository.getByEmail(data.email);
      const nowTime = new Date();

      if (!user) {
        throw new Error("User not found");
      }

      // Check if the OTP is still valid
      if (nowTime > user.otpValidTill) {
        console.error("OTP expired");
        throw new Error("OTP has expired. Please request a new one.");
      }

      // Check if the provided OTP matches
      if (data.otp !== user.otp) {
        console.error("Incorrect OTP");
        throw new Error("The OTP entered is incorrect. Please try again.");
      }

      // Mark user as verified and save
      user.isVerified = true;
      await user.save();

      const token = user.genJWT();
      return {
        message: "OTP verification successfully",
        jwtToken: token,
      };
    } catch (error) {
      console.error("Error in OTP verification:", error);
      throw new Error("Failed to verify OTP. Please try again.");
    }
  }

  async createEmailVerifyOTP(data) {
    try {
      const user = await this.userRepository.getByEmail(data.email);

      if (!user) {
        throw new Error("User not found");
      }

      user.genOTP(); // Generate a new OTP
      await user.save();
      await sendMail(user.email, user.otp); // Send email after generating a new OTP

      return "New otp created uccessfully";
    } catch (error) {
      console.error("Error in generating new OTP:", error);
      throw new Error("Failed to generate new OTP. Please try again.");
    }
  }

  async signin(data) {
    try {
      // Get user info from the databse
      const user = await this.userRepository.getByEmail(data.email);

      if (!user) {
        throw new Error("User not found");
      }

      if (!user.isVerified) {
        throw new Error("First verify your email");
      }

      if (!user.comparePassword(data.password)) {
        throw new Error("Incorrect Password");
      }

      const token = user.genJWT();
      return {
        token,
        name: user.name,
        email: user.email,
        role: user.role,
      };
    } catch (error) {
      console.log("Something went wrong in signin", error);
      throw new Error("Something went wrong in signin");
    }
  }
}

export default UserService;
