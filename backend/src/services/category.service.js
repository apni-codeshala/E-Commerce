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

  async getCategory(id) {
    try {
      const category = await this.categoryRepository.getById(id);
      return category;
    } catch (error) {
      console.log("Something went wrong in getting the category by id");
      throw new Error("Not get the category");
    }
  }

  async getCategoryByName(name) {
    try {
      const category = await this.categoryRepository.getBYName(name);
      return category;
    } catch (error) {
      console.log("Something went wrong in getting the category by name");
      throw new Error("Not get the category");
    }
  }

  async getAll() {
    try {
      const categories = await this.categoryRepository.getAll();
      return categories;
    } catch (error) {
      console.log("Something went wrong in getting all the categories");
      throw new Error("Not get all the categories");
    }
  }

  async addCategoryProperties(id, properties) {
    try {
      const response = await this.categoryRepository.getById(id);

      if (!response) {
        throw new Error("Category not found");
      }

      if (!properties || properties.length === 0) {
        throw new Error("Send properties to add");
      }

      properties.forEach((property) => {
        response.requiredProperties.push(property);
      });

      await response.save();
      return response;
    } catch (error) {
      console.error(
        "Something went wrong in the service layer while adding properties to category:",
        error,
      );
      throw new Error(
        "Something went wrong in the service layer while adding properties to category",
      );
    }
  }

  async deleteCategoryProperty(id, propertyToRemove) {
    try {
      const response = await this.categoryRepository.getById(id);

      if (!response) {
        throw new Error("Category not found");
      }

      if (!propertyToRemove) {
        throw new Error("Specify the property to delete");
      }

      response.requiredProperties = response.requiredProperties.filter(
        (property) => property !== propertyToRemove,
      );

      await response.save();
      return response;
    } catch (error) {
      console.error(
        "Something went wrong in the service layer while deleting property from category:",
        error,
      );
      throw new Error(
        "Something went wrong in the service layer while deleting property from category",
      );
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
