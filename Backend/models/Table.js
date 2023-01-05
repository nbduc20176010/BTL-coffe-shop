const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema(
    {
<<<<<<< HEAD
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

=======
        tableType: {
            type: Number,
            required: true,
        },
>>>>>>> 5aa380ef15866ac9f09c8a02f60887ac56da5852
        empty: {
            type: Boolean,
            required: true,
        },
    },
    {
        timestamps: true,
<<<<<<< HEAD
        collection: "Tables",
=======
        collection: "Table",
>>>>>>> 5aa380ef15866ac9f09c8a02f60887ac56da5852
    }
);

module.exports = mongoose.model("Table", tableSchema);