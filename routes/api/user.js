const router = require("express").Router();

const bcrypt = require("bcryptjs");

const User = require("../../models/User");

router.get("/", async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "no user found" });
  }
});

router.post("/", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = new User({
      name,
      email,
      password,
    });

    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    await user.save();

    res.status(200).json({ msg: "user added successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "server error" });
  }
});

module.exports = router;
