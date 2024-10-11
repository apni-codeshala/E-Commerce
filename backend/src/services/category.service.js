import CategoryRepository from "../respository/category.repository.js";

class CategoryService {
  constructor() {
    this.categoryRepository = new CategoryRepository();
  }

  async createCategory(data) {
    try {
      const category = await this.categoryRepository.create(data);
      return category;
    } catch (error) {
      console.log("Something went wrong in service layer in creating category");
      throw new Error(error);
    }
  }

  async deleteCategory(id) {
    try {
      const response = await this.categoryRepository.destroy(id);
      return response;
    } catch (error) {
      console.log("Something went wrong in service layer in deleting category");
      throw new Error(error);
    }
  }
}

export default CategoryService;
