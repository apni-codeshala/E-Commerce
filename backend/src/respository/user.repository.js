import User from "../models/user.model.js";
import CrudRepository from "./crud.respository.js";

class UserRepository extends CrudRepository {
  constructor() {
    super(User);
  }

  async getByEmail(email) {
    try {
      const user = await User.findOne({ email });
      return user;
    } catch (error) {
      console.log(
        "Semething went wrong in repository layer in finding the user from email",
      );
      throw error;
    }
  }
}

export default UserRepository;
