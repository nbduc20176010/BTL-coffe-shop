const router = require("express").Router();
const Table = require("../models/Table");
<<<<<<< HEAD


//create Table
router.post("/",  async (req, res) => {
=======
const Table = require("../models/Table");

const { verifyTokenAndAdmin } = require("./verifyToken");

//create Table
router.post("/", verifyTokenAndAdmin, async (req, res) => {
>>>>>>> 5aa380ef15866ac9f09c8a02f60887ac56da5852
    const newTable = new Table(req.body);
    try {
        const savedTable = await newTable.save();
        res.json(savedTable);
    } catch (err) {
        res.json(err);
    }
});

//update Table
<<<<<<< HEAD
router.put("/:id",  async (req, res) => {
=======
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
>>>>>>> 5aa380ef15866ac9f09c8a02f60887ac56da5852
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
<<<<<<< HEAD
router.delete("/:id",  async (req, res) => {
    try {
        await Table.findByIdAndDelete(req.params.id);
        res.json("Table has been deleted");
=======
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.json("Product has been deleted");
>>>>>>> 5aa380ef15866ac9f09c8a02f60887ac56da5852
    } catch (err) {
        res.json(err);
    }
});

//get all Table
router.get("/", async (req, res) => {
<<<<<<< HEAD
    try {
        const Table = await Table.find({
            storeId: req.query.storeId,
        });
        res.json(Table);
=======
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
>>>>>>> 5aa380ef15866ac9f09c8a02f60887ac56da5852
    } catch (err) {
        res.json(err);
    }
});

<<<<<<< HEAD
//get Table by id
=======
//get product by id
>>>>>>> 5aa380ef15866ac9f09c8a02f60887ac56da5852
router.get("/:id", async (req, res) => {
    try {
        const Table = await Table.findById(req.params.id);
        res.json(Table);
    } catch (err) {
        res.json(err);
    }
});

module.exports = router;