const router = require("express").Router();
const Category = require("../models/Category");

//CREATE CATEGORY
router.post("/", async (req, res) => {
  const newCat = new Category(req.body);
  try {
    const savedCat = await newCat.save();
    res.status(200).send(savedCat);
  } catch (error) {
    res.status(500).send(error);
  }
});

//GET CATEGORIES
router.get("/", async (req, res) => {
  try {
    const cats = await Category.find();
    res.status(200).send(cats);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
