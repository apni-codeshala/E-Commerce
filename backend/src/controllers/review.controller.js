import ReviewService from "../services/review.service.js";

const reviewService = new ReviewService();

export const createReview = async (req, res) => {
  try {
    const data = {
      rating: req.body.rating,
      comment: req.body.comment,
      reviewerName: req.name,
      reviewerEmail: req.email,
      user_id: req.user,
      product_id: req.qurey.productId,
    };
    const review = await reviewService.createReview(data);
    return res.status(200).json({
      succes: true,
      message: "Thanks to gave review",
      data: review,
      err: {},
    });
  } catch (error) {
    console.log("Something went wrong in controller layer in vreating review");
    return res.status(500).json({
      succes: false,
      message: "Not, able to create a successfull review",
      data: {},
      err: error,
    });
  }
};

export const getProductReviews = async (req, res) => {
  try {
    const reviews = await reviewService.getAllReviewOfProduct(
      req.query.productId,
    );
    return res.status(200).json({
      sucess: true,
      message: "Get all the reviews of product",
      data: reviews,
      err: {},
    });
  } catch (error) {
    console.log("Not able to get all the reviews of product");
    return res.status(500).json({
      succes: false,
      message: "Not, able to get reviews of product",
      data: {},
      err: error,
    });
  }
};

export const updateReview = async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const data = { rating, comment };
    const response = await reviewService.updateReview(req.query.id, data);
    return res.status(200).json({
      sucess: true,
      message: "Updated review of product",
      data: response,
      err: {},
    });
  } catch (error) {
    console.log("Not able to update review of product");
    return res.status(500).json({
      succes: false,
      message: "Not, able to update review of product",
      data: {},
      err: error,
    });
  }
};

export const deleteReview = async (req, res) => {
  try {
    const response = await reviewService.deleteReview(req.query.id);
    return res.status(200).json({
      sucess: true,
      message: "Successfully deleted the review",
      data: response,
      err: {},
    });
  } catch (error) {
    console.log("Something went wrong in deleting the review");
    return res.status(500).json({
      sucess: false,
      message: "Unable to delete the review",
      data: {},
      err: error,
    });
  }
};
