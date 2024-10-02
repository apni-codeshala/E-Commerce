import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import connect from "./config/dbConfig.js";
import apiRoutes from "./routes/index.js";

const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", apiRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  console.log(`Server is listening at PORT: ${PORT}`);
  await connect();
});
