const router = require("express").Router();
const Drink = require("../models/Drink");
const multer = require("multer");

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (
            file.mimetype === "image/jpg" ||
            file.mimetype === "image/png" ||
            file.mimetype === "image/jpeg"
        ) {
            cb(null, "uploads");
        } else {
            cb(null, false);
        }
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.filename + ".jpg");
    },
});
const upload = multer({ storage: storage });

//create Drink
router.post("/", upload.single("image"), async (req, res) => {
    const newDrink = new Drink({
        ...req.body,
        image: {
            data: req.file.filename,
            contentType: req.file.mimetype,
        },
    });
    try {
        const savedDrink = await newDrink.save();
        res.json(savedDrink);
    } catch (err) {
        res.json(err);
    }
});

//update Drink
router.put("/:id", upload.single("image"), async (req, res) => {
    try {
        const updatedDrink = await Drink.findByIdAndUpdate(
            req.params.id,
            {
                $set: {
                    ...req.body,
                    image: {
                        data: req.file.filename,
                        contentType: req.file.mimetype,
                    },
                },
            },
            { new: true }
        );
        res.json(updatedDrink);
    } catch (err) {
        res.json(err);
    }
});

//delete Drink
router.delete("/:id", async (req, res) => {
    try {
        const deletedDrink = await Drink.findByIdAndDelete(req.params.id);
        res.json(deletedDrink);
    } catch (err) {
        res.json(err);
    }
});

//get all Drinks
router.get("/", async (req, res) => {
    try {
        const menuDrink = await Drink.find();
        res.json(menuDrink);
    } catch (err) {
        res.json(err);
    }
});

//get Drink by id
router.get("/:id", async (req, res) => {
    try {
        const selectDrink = await Drink.findById(req.params.id);
        res.json(selectDrink);
    } catch (err) {
        res.json(err);
    }
});

module.exports = router;
