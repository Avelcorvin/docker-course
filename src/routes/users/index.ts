import express from "express";
import path from 'path';
import App from "../..";
const Router = express.Router();
const Files =[
    ['/',__dirname+'../../../dist/index.html'],
    ["/main.js",__dirname+'../../../dist/main.js']
]

Router.get("/user",async(req,res)=>{
    const [users]= await App.bdShemas.user.getAllUsers()
    console.log(users)
    res.send(users)
})



export default Router;