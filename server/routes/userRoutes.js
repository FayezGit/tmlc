import mongoose from "mongoose";
const User = mongoose.model("users");

export default (app) => {
  // CREATE NEW USER
  app.post("/api/v1/user/add", async (req, res) => {
    console.log("ADD NEW USER");
    const { name, email } = req.body;

    try {
      const user = await User.findOne({ name });

      if (user) {
        return res.status(400).json({ message: "User already exists" });
      }

      const userFields = { name, email };

      const response = await User.create(userFields);

      res.status(201).json({ message: "User added successfully!", response });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  // READ SPECIFIC USER
  app.get("/api/v1/user/get/:email", async (req, res) => {
    const { email } = req.params;

    try {
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(404).json({ message: "User does not exist." });
      }

      res.status(200).json({ message: "User found: ", user });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  // READ ALL USERS
  app.get("/api/v1/user/all/get", async (req, res) => {
    try {
      const users = await User.find({});

      if (!users) {
        return res.status(404).json({ message: "There are no users." });
      }

      res.status(200).json({ message: "Users: ", users });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  // UPDATE SPECIFIC USER
  app.put("/api/v1/update/user/:id", async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    try {
      const response = await User.updateOne(
        { _id: id },
        { name, email }
      );
      res
        .status(200)
        .json({ message: "User updated successfullly", response });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  // DELETE SPECIFIC USER
  app.delete("/api/v1/delete/user/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const response = await User.findByIdAndDelete(id);
      res.status(200).json({ message: "User deleted successfully", response });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

};
