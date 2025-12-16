import express from "express";
import movieRoutes from "./routes/movieRoutes.js";

const port = 5001;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

movieRoutes(app);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
