import mongoose from "mongoose";

// schema
    const userSchema = new mongoose.Schema(
        {
            username: {type: String, unique: true, required: true},
            createdAt : {type: Date, required: true}
        }
    )

// reference models
const User = mongoose.model("User", userSchema);

export default User;