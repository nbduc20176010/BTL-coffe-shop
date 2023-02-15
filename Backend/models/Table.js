const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema(
    {
        storeId: {
            type: String,
            require: true,
            ref: "Store",
        },
        order: {
            total: Number,
            drinks: [
                {
                    name: String,
                    price: Number,
                },
            ],
        },
        tableNumber: {
            type: Number,
            required: true,
        },
        numberOfSit: {
            type: Number,
            required: true,
        },
        empty: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
        collection: "Tables",
    }
);

module.exports = mongoose.model("Table", tableSchema);
