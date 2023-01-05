const router = require("express").Router();
const Table = require("../models/Table");


//create Table
router.post("/", async (req, res) => {
    const newTable = new Table(req.body);
    try {
        const savedTable = await newTable.save();
        res.json(savedTable);
    } catch (err) {
        res.json(err);
    }
});

//update Table
router.put("/:id", async (req, res) => {
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
router.delete("/:id", async (req, res) => {
    try {
        await Table.findByIdAndDelete(req.params.id);
        res.json("Table has been deleted");
    } catch (err) {
        res.json(err);
    }
});

//get all Table
router.get("/", async (req, res) => {
    try {
        const Table = await Table.find({
            storeId: req.query.storeId,
        });
        res.json(Table);
    } catch (err) {
        res.json(err);
    }
});

//get Table by id
router.get("/:id", async (req, res) => {
    try {
        const Table = await Table.findById(req.params.id);
        res.json(Table);
    } catch (err) {
        res.json(err);
    }
});

module.exports = router;