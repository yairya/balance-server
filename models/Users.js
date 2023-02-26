import mongoose from "mongoose";

export const usersCollectionName = "Users";

export const userSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    firstName:{
        type: String,
        trim: true,
        required: true
    },
    lastName:{
        type: String,
        trim: true,
        required: true
    },
    phoneNamber:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true,
        min: 18,
        max: 120
    },
    creationDate:{
        type: Date,
        default: Date.now()
    }
});


export const UsersModel = mongoose.model(usersCollectionName, userSchema);