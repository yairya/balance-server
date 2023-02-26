import * as UsersCollection from "../models/Users.js"


export const getAllUsers = () =>{
    return UsersCollection.UsersModel.find({});
}

//----------------------------------------------------------
export const getUserByEmail = (email) =>{
    return UsersCollection.UsersModel.findOne({email: email});
}

//----------------------------------------------------------
export const createUser = async(userData) =>{
    const user = await getUserByEmail(userData.email);
    if(user === null){
        const newUser = new UsersCollection.UsersModel(userData);
        await newUser.save();
        return newUser;
    }
    else{
        return null;
    }
}