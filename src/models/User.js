    import mongoose from "mongoose";
import mongoose from "./Post";

const {Schema} = mongoose

const userSchema = new Schema ({
    name:{
        type: "string",
        unique: true,
        required: true,
    },
    email:{
        type: "string",
        unique: true,
        required: true,
    },
    password:{
        type: "string",
        required: true,
    },
},
{timestamps: true}
);

export default mongoose.model("User",userSchema);