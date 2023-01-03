const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema(
    {
        tableType: {
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
        collection: "Table",
    }
);

module.exports = mongoose.model("Table", tableSchema);