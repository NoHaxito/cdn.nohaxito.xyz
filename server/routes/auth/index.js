import express from "express";
import userSchema from "../../../schemas/userSchema.js";
const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userSchema.findOne({ email: email });
    const checkPassword = await userSchema.findOne({ password });
    if (!user) {
      return res.json({ error: "Email or Password are invalid." });
    }
    if (!checkPassword) {
      return res.json({ error: "Email or Password are invalid." });
    }
    user._id = user._id.toString();
    req.session.account = user;
    req.session.save();
    return res.json({ success: true });
  } catch (e) {
    console.log(e);
    return res.send({
      error:
        "Error logging in, please try again later. If the error persists contact an administrator.",
    });
  }
});
router.post("/register", async (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body;
    const checkEmail = await userSchema.findOne({ email });
    if (checkEmail) {
      return res.json({ error: "Email already taken, please use other." });
    }
    if (password.length < 8) {
      return res.json({
        error: "Password length must be need at least 8 characters.",
      });
    }
    if (confirmPassword !== password) {
      return res.json({ error: "Password and Confirm Password must be same." });
    }
    let userData = new userSchema();
    userData.username = username;
    userData.email = email;
    userData.password = password;
    userData.avatar =
      "https://www.gravatar.com/avatar/00000000000000000000000000000000";
    await userData.save();
    return res.json({ success: true });
  } catch (e) {
    console.log(e);
    return res.send({
      error:
        "Error registering user, please try again later. If the error persists contact an administrator.",
    });
  }
});

export default router;
