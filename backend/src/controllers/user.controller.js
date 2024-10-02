import UserService from "../services/user.service.js";

const userService = new UserService();

export const signup = async (req, res) => {
  try {
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
