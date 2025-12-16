import { movies } from "../data/movies.js";

export default (app) => {
  app.get("/api/v1/get/movies", (req, res) => {
    console.log("Get Movie");
    const response = movies;
    res.status(200).json({ message: "Movies fetched successfully!", response });
  });
};
