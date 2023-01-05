const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema(
    {
        storeName: {
            type: String,
            required: true,
        },

        numberOfTable: {
            type: Number,
            required: true,
        },

        open: {
            type: Boolean,
            required: true,
        },

        income: {
            type: Number,
            required: true,
        }
    },
    {
        timestamps: true,
        collection: "Stores",
    }
);

module.exports = mongoose.model("Store", storeSchema);