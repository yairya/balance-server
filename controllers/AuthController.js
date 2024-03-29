/*
authentication controller
*/

import * as UsersService from "../services/Users.js"


export const getAllUsers = async(req,res) => {
    console.log("get all users req camming");
    try{
        const allUsers = await UsersService.getAllUsers();
        res.status(200).send(allUsers);
    }
    catch{
        console.log(e);
        res.status(400).send({error: e.Error});
    }
};

//-------------------------------------------------------------------------
export const createUser = async(req,res) => {
    console.log("create new  user req camming");
    console.log(req.body);
    try{
        console.log("searching after user according email");
        const newUser = await UsersService.createUser(req.body);
        if(newUser != null){
            res.status(200).send(newUser);
        }
        else{
            res.status(403).send({msg: `user already exists for mail: ${req.body.email}`});
        }
    }
    catch(err){
        console.log(err);
        res.status(400).send(err);
    }
};

//-------------------------------------------------------------------------
export const login = async(req,res) => {
    
    let status = false;
    console.log("create new  user req camming");
    console.log(req.body);
    try{
        console.log("searching after user according email");
        const user = await UsersService.getUserByEmail(req.body.email);
        if(user != null)
        {
            if(user.password === req.body.password)
            {
                res.status(200).send({msg: "login"});
                status = true;
            }
        }

        if(status === false)
        {
            res.status(403).send({msg: `invalid mail or password`});
        }
    }
    catch(err){
        console.log(err);
        res.status(400).send(err);
    }
};