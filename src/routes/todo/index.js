"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const redis_1 = __importDefault(require("../../databases/redis"));
const pacakages_1 = require("../../pacakages");
const __1 = __importDefault(require("../.."));
const router = express_1.default.Router();
const parse = (data) => {
    if (data) {
        return JSON.parse(data);
    }
    else {
        return [];
    }
};
router.post("/todo", async (req, res) => {
    const { name, email, password } = JSON.parse(req.body) || {};
    const data = await redis_1.default.get('todo');
    await __1.default.bdShemas.user.addUser(name, email, password);
    await redis_1.default.setOne('todo', JSON.stringify([...parse(data), { name, email, password }]));
    res.status(200);
});
router.get("/todo", async (req, res) => {
    const data = await redis_1.default.get('todo');
    const todo = parse(data);
    // console.log(todo)
    const compiled = await pacakages_1.ejs.renderFile(__dirname + '/index.ejs', { todo });
    // console.log(compiled)
    res.send(compiled);
});
exports.default = router;
//# sourceMappingURL=index.js.map