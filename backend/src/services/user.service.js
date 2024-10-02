import UserRepository from "../respository/user.repository.js";
import sendMail from "../utils/sendEmail.js";

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  // Signup
  /**
   * First when request comes create an 6 digit OTP
   * Than send this verification email to the user email that user had entered
   * than set verification time to now time + 10 min
   * than create user and set isVerified false
   * We don't have to return any token in this
   */
  async signup(data) {
    try {
      /**
       * Here in data we have to pass name, email, password
       * otp, isVerified and otpValidTill will automatically created inside db
       */
      const user = await this.userRepository.create(data);
      await sendMail(user.email, user.otp);
      return user;
    } catch (error) {
      console.log("Some problem in creating user inside user service");
      throw error;
    }
  }
}

export default UserService;
