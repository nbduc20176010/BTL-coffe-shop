const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema(
    {
        storeId: {
            type: String,
            require: true,
            ref: 'Store'
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
            required: true,
        },
    },
    {
        timestamps: true,
        collection: "Tables",
    }
);

module.exports = mongoose.model("Table", tableSchema);