import ProductService from "../services/product.service.js";
import mutipleUploader from "../config/file-upload-s3.config.js";

const productService = new ProductService();

export const addProduct = [
  mutipleUploader(), // Using mutipleUploader as middleware

  async (req, res) => {
    try {
      const seller_id = req.sellerId;
      const {
        name,
        brand,
        description,
        actualPrice,
        percentageOff,
        stocks,
        tags,
        highlights,
        category,
        categorySpecificProperties,
      } = req.body;

      // Ensure images are uploaded
      const productImages = req.files.productImages?.map(
        (file) => file.location,
      );

      const thumbnail = req.files.thumbnail?.[0].location;

      if (!productImages || productImages.length === 0 || !thumbnail) {
        return res
          .status(400)
          .json({ error: "Product images and thumbnail are required" });
      }

      const newProduct = {
        seller_id,
        name,
        brand,
        description,
        actualPrice,
        percentageOff,
        stocks,
        tags,
        highlights,
        category,
        categorySpecificProperties,
        productImages,
        thumbnail,
      };

      const createdProduct = await productService.createProduct(newProduct);

      return res.status(201).json({
        message: "Product created successfully",
        product: createdProduct,
      });
    } catch (error) {
      console.error("Error creating product:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  },
];
