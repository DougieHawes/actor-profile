const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ msg: "gallery route" });
});

module.exports = router;
