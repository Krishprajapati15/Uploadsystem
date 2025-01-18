const express = require("express");
const router = express.Router();
const File = require("../models/file");

router.get("/", async (req, res) => {
  try {
    const files = await File.find().exec();
    res.render("index", { files: files });
  } catch (err) {
    console.error(err);
    res.status(500).send("internal server error");
  }
});

module.exports = router;
