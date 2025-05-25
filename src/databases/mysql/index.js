"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySqlDB = exports.DBUser = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
class MySqlDB {
    constructor() {
    }
    async main() {
        var connection = await promise_1.default.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: 'my-secret-pw',
            database: 'MyBd',
        });
        connection.connect();
        return connection;
    }
}
exports.MySqlDB = MySqlDB;
class DBUser {
    constructor(connection) {
        this.connection = connection;
    }
    async addUser(name, password, user) {
        try {
            const values = [name, password, user];
            const query = 'INSERT INTO User (`name`, `email`, `password`) VALUES (?, ?, ?)';
            return await this.connection.execute(query, values);
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    async getAllUsers() {
        try {
            const query = 'SELECT * FROM User';
            return await this.connection.execute(query);
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    async getOneUser(name) {
        const query = 'SELECT * FROM User  WHERE `name` = ?';
        const values = [name];
        return await this.connection.execute(query, values);
    }
}
exports.DBUser = DBUser;
//# sourceMappingURL=index.js.map