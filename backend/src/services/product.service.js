import ProductRepository from "../respository/product.repository.js";

class ProductService {
  constructor() {
    this.productRepository = new ProductRepository();
  }

  async createProduct(data) {
    try {
      const response = await this.productRepository.create(data);
      return response;
    } catch (error) {
      console.log("Not able to create product in service layer");
      throw new Error(error);
    }
  }
}

export default ProductService;
