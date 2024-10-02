import User from "../models/user.model.js";
import CrudRepository from "./crud.respository.js";

class UserRepository extends CrudRepository {
  constructor() {
    super(User);
  }
}

export default UserRepository;
