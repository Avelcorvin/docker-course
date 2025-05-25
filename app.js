"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const todo_1 = __importDefault(require("./src/routes/todo"));
const main_1 = __importDefault(require("./src/routes/main"));
const users_1 = __importDefault(require("./src/routes/users"));
const body_parser_1 = __importDefault(require("body-parser"));
const src_1 = __importDefault(require("./src"));
exports.app = (0, express_1.default)();
const PORT = process.env.PORT || 80;
console.log(PORT);
exports.app.set('view engine', 'pug');
exports.app.use(body_parser_1.default.json({
    limit: '100mb'
}));
exports.app.use(body_parser_1.default.text());
exports.app.use(body_parser_1.default.urlencoded({
    extended: true,
    limit: '100mb',
    parameterLimit: 50000,
}));
exports.app.use('/public', express_1.default.static(path_1.default.join(__dirname, '/public')));
exports.app.use(todo_1.default);
exports.app.use(main_1.default);
exports.app.use(users_1.default);
exports.app.listen(PORT, async () => {
    await src_1.default.initSettings();
    console.log("Hello world");
});
//# sourceMappingURL=app.js.map