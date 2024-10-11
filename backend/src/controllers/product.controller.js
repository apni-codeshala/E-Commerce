import ProductService from "../services/product.service.js";
// import { mutipleUploader } from "../config/file-upload-s3.config.js";

const productService = new ProductService();

// export const addProduct = async (req, res) => {
//   mutipleUploader(req, res, async (err) => {
//     if (err) {
//       return res.status(400).json({ error: "Failed to upload images" });
//     }
//     try {
//       const {
//         name,
//         brand,
//         description,
//         actualPrice,
//         percentageOff,
//         stocks,
//         tags,
//         highlights,
//         category,
//         categorySpecificProperties,
//       } = req.body;

//       const productImages = req.files.productImages?.map(
//         (file) => file.location,
//       );
//       const thumbnail = req.files.thumbnail?.[0].location;

//       if (!productImages || productImages.length === 0 || !thumbnail) {
//         return res
//           .status(400)
//           .json({ error: "Product images and thumbnail are required" });
//       }

//       // Save the product using ProductService (assumed to handle database interaction)
//       const createdProduct = await productService.createProduct(newProduct);

//       // Respond with success message
//       return res.status(201).json({
//         message: "Product created successfully",
//         product: createdProduct,
//       });
//     } catch (error) {
//       console.error(
//         "Something went wrong in controller in creating product",
//         error,
//       );
//       return res.status(500).json({ error: "Internal server error" });
//     }
//   });
// };
