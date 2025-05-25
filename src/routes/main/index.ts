import express from "express";
import path from 'path';
const Router = express.Router();
const Files =[
    ['/',__dirname+'../../../dist/index.html'],
    ["/main.js",__dirname+'../../../dist/main.js']
]

Router.get("/",async(req,res)=>{
    const file = path.resolve(__dirname+'../../../../dist/index.html')
    res.sendFile(file)
})

Router.get("/main.js",async(req,res)=>{
    const file = path.resolve(__dirname+'../../../../dist/main.js')
    res.sendFile(file)
})

export default Router;

// const Router = express.Router();
// const Files =[
//     ['/',__dirname+'../../../dist/index.html'],
//     ["/main.js",__dirname+'../../../dist/main.js']
// ]
// const callback = (route)=>{
//     return async(req,res)=>{
//         const file = path.resolve(route)
//         res.sendFile(file)
//     }
// }

// Files.map(e=>Router.get(e[0],callback(e[1])))
// export default Router;