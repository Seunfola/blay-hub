import mongoose from "mongoose";
const { Schema } = mongoose;

// Check if the model already exists
const Post = mongoose.models.Post || mongoose.model("Post", new Schema({
    title: {
        type: String,
        unique: true,
        required: true,
    },
    desc: {
        type: String,
        unique: true,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    }
}, { timestamps: true }));

export default Post;
