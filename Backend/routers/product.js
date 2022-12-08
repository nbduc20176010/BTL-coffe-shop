const router = require("express").Router();
const Product = require("../models/Product");

const { verifyTokenAndAdmin } = require("./verifyToken");

//create product
router.post("/", verifyTokenAndAdmin, async (req, res) => {
    const newProduct = new Product(req.body);
    try {
        const savedProduct = await newProduct.save();
        res.json(savedProduct);
    } catch (err) {
        res.json(err);
    }
});

//update product
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.json(updatedProduct);
    } catch (err) {
        res.json(err);
    }
});

//delete product
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.json("Product has been deleted");
    } catch (err) {
        res.json(err);
    }
});

//get all products
router.get("/", async (req, res) => {
    const category = req.query.category;
    const page = req.query.page;
    const size = req.query.size;
    try {
        const total = await Product.find();
        const products =
            category !== "all"
                ? await Product.find({
                      category: category,
                  })
                      .skip(page * size - size)
                      .limit(size)
                : await Product.find()
                      .skip(page * size - size)
                      .limit(size);
        res.json({ result: products, total: total.length });
    } catch (err) {
        res.json(err);
    }
});

//get product by id
router.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.json(product);
    } catch (err) {
        res.json(err);
    }
});

module.exports = router;
