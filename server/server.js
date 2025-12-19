import express from "express";
import mongoose from "mongoose";
import "./model/Movie.js";
import "./model/User.js"
import movieRoutes from "./routes/movieRoutes.js";
import userRoutes from "./routes/userRoutes.js"
import { config } from "dotenv";

config();

const port = process.env.PORT || 5001;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGODB_URI, {})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

movieRoutes(app);
userRoutes(app);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
