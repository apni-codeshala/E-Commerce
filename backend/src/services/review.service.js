import ReviewRepository from "../respository/review.repository.js";

class ReviewService {
  constructor() {
    this.reviewRepository = new ReviewRepository();
  }

  async createReview(data) {
    try {
      const review = await this.reviewRepository.create(data);
      return review;
    } catch (error) {
      console.log(
        "Semething went wrong in service layer in creating review.",
        error,
      );
      throw new Error(error);
    }
  }

  async updateReview(id, data) {
    try {
      const review = await this.reviewRepository.getById(id);
      if (!review) {
        throw new Error("Review doesn't exist");
      }
      if (!(data.user_id == review.user_id)) {
        throw new Error("You are not that one who update this review");
      }
      const response = await this.reviewRepository.update(id, data);
      return response;
    } catch (error) {
      console.log(
        "Semething went wrong in service layer in updating review.",
        error,
      );
      throw new Error(error);
    }
  }

  async getAllReviewOfProduct(product_id) {
    try {
      const reviews =
        await this.reviewRepository.getAllReviewsOfProduct(product_id);
      return reviews;
    } catch (error) {
      console.log(
        "Semething went wrong in service layer in getting reviews by product id.",
        error,
      );
      throw new Error(error);
    }
  }

  async getReview(id) {
    try {
      const review = await this.reviewRepository.getById(id);
      return review;
    } catch (error) {
      console.log(
        "Semething went wrong in service layer in getting review by id.",
        error,
      );
      throw new Error(error);
    }
  }

  async deleteReview(id) {
    try {
      const response = await this.reviewRepository.destroy(id);
      return response;
    } catch (error) {
      console.log(
        "Semething went wrong in service layer in deleting review by id.",
        error,
      );
      throw new Error(error);
    }
  }
}

export default ReviewService;
