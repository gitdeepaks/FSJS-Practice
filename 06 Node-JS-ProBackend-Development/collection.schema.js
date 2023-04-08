import mongoose from "mongoose";

const collectionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide acollection name"],
    }
},
    { timestamps: true }


)