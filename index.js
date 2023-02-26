import express from "express";
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"

import * as GeneralController from "./controllers/GeneralController.js"
import * as LoginController from "./controllers/LoginController.js"

dotenv.config();
const {USER, PASS, DB_HOST, DB_NAME, PORT} = process.env;

//init the web server
const app = express();

//middleware that server need
app.use(express.json());
app.use(cors());

//Routes
app.get("/api/alive", GeneralController.isAlive);
app.get("/api/login/users", LoginController.getAllUsers);


//DB connection and server listner
mongoose.set('strictQuery', true);
const dbUrl = `mongodb+srv://${USER}:${PASS}@${DB_HOST}/${DB_NAME}`;
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }, (err) =>  {
        const msg = err? err : "succeed to connect";
        console.log("info: " + msg)
        if( !err)
        {
            app.listen(PORT, () => {
                console.log(`Balance server Controller listen to ${PORT}`)
            })
        }
    }
);