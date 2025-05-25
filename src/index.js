"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = require("./databases/mysql");
class App {
    constructor() {
    }
    static async initSettings() {
        const dbConnection = new mysql_1.MySqlDB();
        this.dbConnection = await dbConnection.main();
        this.bdShemas.user = new mysql_1.DBUser(this.dbConnection);
    }
}
App.bdShemas = {};
exports.default = App;
//# sourceMappingURL=index.js.map