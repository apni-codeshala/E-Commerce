import Category from "../models/category.model.js";
import CrudRepository from "./crud.respository.js";

class CategoryRepository extends CrudRepository {
  constructor() {
    super(Category);
  }
}

export default CategoryRepository;
