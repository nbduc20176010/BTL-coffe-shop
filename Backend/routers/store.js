const router = require("express").Router();
const Store = require("../models/Store");
const jwt = require("jsonwebtoken");

router.post("/login", async (req, res) => {
    try {
        const store = await Store.findOne({
            username: req.body.username,
        });
        if (store) {
            if (store.password !== req.body.password) {
                res.json({ message: "wrong password!", status: "failed" });
            } else {
                const accessToken = jwt.sign(
                    {
                        storeName: store.storeName,
                        username: store.username,
                    },
                    process.env.SECRET_KEY,
                    { expiresIn: "3d" }
                );
                res.json({
                    username: store.username,
                    storeid: store._id,
                    token: accessToken,
                });
            }
        } else {
            res.json({ message: "can't find user!", status: "failed" });
        }
    } catch (err) {
        res.json(err);
    }
});


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
        const store = await Store.find({});
        res.json(store);
    } catch (err) {
        res.json(err);
    }
});

//get Store by id
router.post("/:id", async (req, res) => {
    try {
        const store = await Store.findById(req.params.id);
        const { password, ...others } = store;
        res.json(others._doc);
    } catch (err) {
        res.json(err);
    }
});

module.exports = router;
