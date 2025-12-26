import mongoose from "mongoose";
const Movie = mongoose.model("movies");

export default (app) => {
  // CREATE NEW MOVIE
  app.post("/api/v1/movie/add", async (req, res) => {
    console.log("ADD NEW MOVIE");
    const { name, image, description } = req.body;

    try {
      const movie = await Movie.findOne({ name });

      if (movie) {
        return res.status(400).json({ message: "Movie already exists" });
      }

      const movieFields = { name, description, image };

      const response = await Movie.create(movieFields);

      res.status(201).json({ message: "Movie added successfully!", response });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  // READ SPECIFIC MOVIE
  app.get("/api/v1/get/movie/:id", async (req, res) => {
    const { id } = req.params;
    const response = await Movie.findById(id);
    res.status(200).json({ message: "Movie fetched successfully!", response });
  });

  // READ ALL MOVIES
  app.get("/api/v1/get/movies", async (req, res) => {
    console.log("GET ALL MOVIES");
    try {
      const response = await Movie.find({});
      res
        .status(200)
        .json({ message: "Movies fetched successfully", response });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  // UPDATE SPECIFIC MOVIE
  app.put("/api/v1/update/movie/:id", async (req, res) => {
    const { id } = req.params;
    const { name, image, description } = req.body;
    try {
      const response = await Movie.updateOne(
        { _id: id },
        { name, image, description }
      );
      res
        .status(200)
        .json({ message: "Movie updated successfullly", response });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  // DELETE SPECIFIC MOVIE
  app.delete("/api/v1/delete/movie/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const response = await Movie.findByIdAndDelete(id);
      res.status(200).json({ message: "Movie deleted successfully", response });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
};
