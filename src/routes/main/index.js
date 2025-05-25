"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const Router = express_1.default.Router();
const Files = [
    ['/', __dirname + '../../../dist/index.html'],
    ["/main.js", __dirname + '../../../dist/main.js']
];
Router.get("/", async (req, res) => {
    const file = path_1.default.resolve(__dirname + '../../../../dist/index.html');
    res.sendFile(file);
});
Router.get("/main.js", async (req, res) => {
    const file = path_1.default.resolve(__dirname + '../../../../dist/main.js');
    res.sendFile(file);
});
exports.default = Router;
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
//# sourceMappingURL=index.js.map