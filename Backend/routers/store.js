const router = require("express").Router();
const Store = require("../models/Store");


//create Store
router.post("/", async (req, res) => {
    const newStore = new Store(req.body);
    try {
        const savedStore = await newStore.save();
        res.json(savedStore);
    } catch (err) {
        res.json(err);
    }
});

//update Store
router.put("/:id", async (req, res) => {
    try {
        const updatedStore = await Store.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.json(updatedStore);
    } catch (err) {
        res.json(err);
    }
});

//delete Store
router.delete("/:id", async (req, res) => {
    try {
        await Store.findByIdAndDelete(req.params.id);
        res.json("Store has been deleted");
    } catch (err) {
        res.json(err);
    }
});

//get all Store
router.get("/", async (req, res) => {
    try {
        const Store = await Store.find({});
        res.json(Store);
    } catch (err) {
        res.json(err);
    }
});

//get Store by id
router.get("/:id", async (req, res) => {
    try {
        const Store = await Store.findById(req.params.id);
        res.json(Store);
    } catch (err) {
        res.json(err);
    }
});

module.exports = router;