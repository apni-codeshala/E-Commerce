import CategoryService from "../services/category.service.js";

const categoryService = new CategoryService();

export const createCategory = async (req, res) => {
  try {
    const { name, properties } = req.body;
    const data = {
      name,
      requiredProperties: properties,
    };
    const category = categoryService.createCategory(data);
    return res.status(200).json({
      success: true,
      message: "Category created successfully",
      data: category,
      err: {},
    });
  } catch (error) {
    console.log("Something went wrong in creating category in controller");
    return res.status(500).json({
      success: false,
      message: "Something went wrong in creating category",
      data: {},
      err: error,
    });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const id = req.query.id;
    const response = categoryService.deleteCategory(id);
    return res.status(200).json({
      success: true,
      message: "Category deleted successfully",
      data: response,
      err: {},
    });
  } catch (error) {
    console.log("Something went wrong in deleting category in controller");
    return res.status(500).json({
      success: false,
      message: "Something went wrong in deleting category",
      data: {},
      err: error,
    });
  }
};
