import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String },
  email: { type: String },
});

mongoose.model("users", userSchema);