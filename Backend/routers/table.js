const router = require("express").Router();
const Table = require("../models/Table");
const Table = require("../models/Table");

const { verifyTokenAndAdmin } = require("./verifyToken");

//create Table
router.post("/", verifyTokenAndAdmin, async (req, res) => {
    const newTable = new Table(req.body);
    try {
        const savedTable = await newTable.save();
        res.json(savedTable);
    } catch (err) {
        res.json(err);
    }
});

//update Table
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const updatedTable = await Table.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.json(updatedTable);
    } catch (err) {
        res.json(err);
    }
});

//delete Table
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.json("Product has been deleted");
    } catch (err) {
        res.json(err);
    }
});

//get all Table
router.get("/", async (req, res) => {
    const category = req.query.category;
    const page = req.query.page;
    const size = req.query.size;
    try {
        const total = await Table.find();
        const Tables =
            category !== "all"
                ? await Table.find({
                      category: category,
                  })
                      .skip(page * size - size)
                      .limit(size)
                : await Table.find()
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
        const Table = await Table.findById(req.params.id);
        res.json(Table);
    } catch (err) {
        res.json(err);
    }
});

module.exports = router;