export const usersCollectionName = "Users";

export const userSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        require: true,
        unique: true
    },
    password: {
        type: String,
        trim: true,
        require: true
    },
    firstName:{
        type: String,
        trim: true,
        require: true
    },
    lastName:{
        type: String,
        trim: true,
        require: true
    },
    phoneNamber:{
        type: Nubmer,
        require: true
    },
    gender:{
        type: String,
        require: true
    },
    age:{
        type: Nubmer,
        require: true,
        min: 18,
        max: 120
    },
    creationDate:{
        type: Date,
        default: Date.now()
    }
});


export const UsersModel = mongoose.model(usersCollectionName, userSchema);