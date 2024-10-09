import Review from "../models/review.model.js";
import CrudRepository from "./crud.respository.js";

class ReviewRepository extends CrudRepository {
  constructor() {
    super(Review);
  }

  async getAllReviewsOfProduct(product_id) {
    try {
      const reviews = await Review.find({
        product_id,
      });
      return reviews;
    } catch (error) {
      console.log(
        "Semething went wrong in repository layer in finding the reviews from product id",
      );
      throw error;
    }
  }
}

export default ReviewRepository;
