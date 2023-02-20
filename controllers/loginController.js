import express from "express";
import cors from "cors";

const baseAPI="/api/login";

export const loginController = () =>{

    //init the server
    const app = express();
    
    //middleware that server need
    app.use(express.json());
    app.use(cors());
    
    app.get(baseAPI + "/alive", async(req,res) => {
        console.log("get alive req camming");
        res.send({msg:"im alive"});
    });
    
    app.listen(8080, () => {
        console.log("login controller listen")
    })
}