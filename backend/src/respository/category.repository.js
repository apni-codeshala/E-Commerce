import Category from "../models/category.model.js";
import CrudRepository from "./crud.respository.js";

class CategoryRepository extends CrudRepository {
  constructor() {
    super(Category);
  }

  async getBYName(name) {
    try {
      const category = await Category.findOne({ name });
      return category;
    } catch (error) {
      console.log(
        "Something went wrong in category repository in get category by name",
      );
      throw new Error("Something went wrong");
    }
  }
}

export default CategoryRepository;
