import CategoryService from "../services/category.service.js";

const categoryService = new CategoryService();

export const createCategory = async (req, res) => {
  try {
    const { name, properties } = req.body;
    const data = {
      name,
      requiredProperties: properties,
    };
    const category = await categoryService.createCategory(data);
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

// loxalhost:5000/api/v1/getCategoryInfo/?name="mobile"
export const getCategoryInfo = async (req, res) => {
  try {
    const name = req.query.name;
    const response = await categoryService.getCategoryByName(name);
    return res.status(200).json({
      success: true,
      message: "Succesfully, get the category details from name!",
      data: response,
      err: {},
    });
  } catch (error) {
    console.log(
      "Something went wrong in category service in getting the category by name",
    );
    return res.status(500).json({
      success: false,
      message:
        "Something went wrong in category service in getting the category by name",
      data: {},
      err: error,
    });
  }
};

// localhost:5000/api/v1/addCategoryProperties/?id="sdfsdsdfsdfs"
export const addCategoryProperties = async (req, res) => {
  try {
    // properties would be array
    const id = req.query.id;
    const { properties } = req.body;
    const response = await categoryService.addCategoryProperties(
      id,
      properties,
    );
    return res.status(200).json({
      success: true,
      message: "Properties added to category, successfull",
      data: response,
      err: {},
    });
  } catch (error) {
    console.log("Something went wrong in adding properties");
    return res.status(500).json({
      success: false,
      message: "Something went wrong adding propeties to category",
      data: {},
      err: error,
    });
  }
};

// Only single properties can be deleated at a time
// localhost:5000/api/v1/deleteCategoryProperty/?id="sdfsdsdfsdfs"
export const deleteCategoryProperties = async (req, res) => {
  try {
    const id = req.query.id;
    const { property } = req.body;
    const response = await categoryService.deleteCategoryProperty(id, property);
    return res.status(200).json({
      success: true,
      message: "Category, property deleted successfully",
      data: response,
      err: {},
    });
  } catch (error) {
    console.log("Something went wrong in deleting the property of category");
    return res.status(500).json({
      success: false,
      message: "Something went wrong in deleting the property of category",
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
