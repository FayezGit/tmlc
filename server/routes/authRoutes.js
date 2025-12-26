import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import requireLogin from "../middlewares/requireLogin.js";
const User = mongoose.model("users");

const otpLength = 6;

export default (app) => {
  // Send OTP
  app.post("/api/v1/send/otp/email", async (req, res) => {
    try {
      const { email } = req.body;

      const digit = "0123456789";
      let newOTP = "";
      for (let i = 0; i < otpLength; i++) {
        newOTP += digit[Math.floor(Math.random() * 10)];
      }

      console.log("newOTP: ", newOTP);

      const user = await User.findOne({ email });

      if (!user) {
        const response = await User.create({ email, otp: newOTP });
        res.status(201).json({ message: "OTP Sent Successfully", response });
      } else {
        const response = await User.updateOne({ email }, { otp: newOTP });
        res.status(201).json({ message: "OTP Sent Successfully", response });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  //   Verify OTP
  app.post("/api/v1/verify/otp/email", async (req, res) => {
    console.log("Verify OTP 1");
    try {
      const { email, otp } = req.body;
      console.log("Verify OTP 2");

      const user = await User.findOne({ email });
      console.log("Verify OTP 3");

      if (user && user.otp === otp) {
        const payload = {
          id: user._id,
          email: user.email,
        };
        console.log("Verify OTP 4");

        const token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: process.env.JWT_EXPIRE_IN,
        });
        console.log("Verify OTP 5");

        res.status(200).json({ message: "Login Success", token });
        console.log("Verify OTP 6");
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  //   Get Current User
  app.get("/api/v1/current/user", requireLogin, async (req, res) => {
    console.log("CURRENT USER", req);

    try {
      const user = await User.findById(req.user.id, "-otp");
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      res.status(200).json({ message: "Current User", user });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: error.message });
    }
  });
};
