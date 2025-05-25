"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const __1 = __importDefault(require("../.."));
const Router = express_1.default.Router();
const Files = [
    ['/', __dirname + '../../../dist/index.html'],
    ["/main.js", __dirname + '../../../dist/main.js']
];
Router.get("/user", async (req, res) => {
    const [users] = await __1.default.bdShemas.user.getAllUsers();
    console.log(users);
    res.send(users);
});
exports.default = Router;
//# sourceMappingURL=index.js.map