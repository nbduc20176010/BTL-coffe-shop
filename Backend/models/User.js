const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        storeId: {
            type: String,
            require: true,
            ref:'Store'
        },
        
        username: {
            type: String,
            required: true,
            unique: true,
        },
    
        password: {
            type: String,
            required: true,
        },
        
    },
    {
        timestamps: true,
        collection: "Users",
    }
);

module.exports = mongoose.model("User", userSchema);
