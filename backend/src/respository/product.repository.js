import Product from "../models/product.model.js";
import CrudRepository from "./crud.respository.js";

class ProductRepository extends CrudRepository {
  constructor() {
    super(Product);
  }
}

export default ProductRepository;
