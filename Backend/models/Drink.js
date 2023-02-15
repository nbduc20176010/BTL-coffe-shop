const mongoose = require("mongoose");

const drinkSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        image: {
            data: String,
            contentType: String,
        },
        price: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
        collection: "Drinks",
    }
);

module.exports = mongoose.model("Drink", drinkSchema);
