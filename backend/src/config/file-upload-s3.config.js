import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";
import dotenv from "dotenv";

dotenv.config();

aws.config.update({
  region: process.env.AWS_REGION,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  accessKeyId: process.env.AWS_KEY_ID,
});

const s3 = new aws.S3();

// Configuring the multer for multiple file uploads
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_BUCKET_NAME,
    acl: "public-read",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString() + "-" + file.originalname);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5mb
});

const mutipleUploader = () =>
  upload.fields([
    { name: "productImages", maxCount: 4 }, // Allows uploading up to 4 product images
    { name: "thumbnail", maxCount: 1 }, // 1 thumbnail image
  ]);

export default mutipleUploader;
