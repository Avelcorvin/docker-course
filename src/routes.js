"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../app");
const main_1 = __importDefault(require("./routes/main"));
const todo_1 = __importDefault(require("./routes/todo"));
app_1.app.use(main_1.default);
app_1.app.use(todo_1.default);
//# sourceMappingURL=routes.js.map