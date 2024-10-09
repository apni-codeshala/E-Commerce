import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

import UserRepository from "../respository/user.repository.js";

const userRepository = new UserRepository();
const SECRET_KEY = process.env.JWT_SECRET;

function verifyToken(token) {
  try {
    const response = jwt.verify(token, SECRET_KEY);
    return response;
  } catch (err) {
    console.log("Token not verified");
    return err;
  }
}

const isAuthenticated = async (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.json({
      code: 401,
      message: "Token not found, user want to login first",
    });
  }

  const response = verifyToken(token);

  if (!response) {
    return res.json({
      code: 401,
      message: "Token not verified",
    });
  }

  try {
    const user = await userRepository.getById(response.id);
    req.user = user.id;
    req.role = user.role;
    req.email = user.email;
    req.name = user.name;

    next();
  } catch (err) {
    return res.json({
      code: 401,
      message: "User not found",
    });
  }
};

export default isAuthenticated;
