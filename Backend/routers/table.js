const router = require("express").Router();
const Store = require("../models/Store");
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
                $set: {
                    order: req.body,
                    empty: false,
                },
            },
            { new: true }
        );
        res.json(updatedTable);
    } catch (err) {
        res.json(err);
    }
});

//clear table
router.put("/clear/:id", async (req, res) => {
    try {
        const currentTable = await Table.findById(req.params.id);
        const updateStoreIncome = await Store.findById(currentTable.storeId);
        updateStoreIncome.income += currentTable.order.total;
        updateStoreIncome.save();
        const updatedTable = await Table.findByIdAndUpdate(
            req.params.id,
            {
                $set: {
                    order: {
                        total: 0,
                        drinks: [],
                    },
                    empty: true,
                },
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
        const deletedTable = await Table.findByIdAndDelete(req.params.id);
        res.json(deletedTable);
    } catch (err) {
        res.json(err);
    }
});

//get all Table
router.get("/", async (req, res) => {
    try {
        const storeTables = await Table.find({
            storeId: req.query.storeId,
        });
        res.json(storeTables);
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
