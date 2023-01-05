const router = require("express").Router();
const Drink = require("../models/Drink");


//create Drink
router.post("/", async (req, res) => {
    const newDrink = new Drink(req.body);
    try {
        const savedDrink = await newDrink.save();
        res.json(savedDrink);
    } catch (err) {
        res.json(err);
    }
});

//update Drink
router.put("/:id", async (req, res) => {
    try {
        const updatedDrink = await Drink.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
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
        await Drink.findByIdAndDelete(req.params.id);
        res.json("Drink has been deleted");
    } catch (err) {
        res.json(err);
    }
});

//get all Drinks
router.get("/", async (req, res) => {
    try {
        const Drink = await Drink.find();
        res.json(Drink);
    } catch (err) {
        res.json(err);
    }
});

//get Drink by id
router.get("/:id", async (req, res) => {
    try {
        const Drink = await Drink.findById(req.params.id);
        res.json(Drink);
    } catch (err) {
        res.json(err);
    }
});

module.exports = router;
