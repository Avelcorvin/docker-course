"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = require("redis");
class Redis {
    constructor() {
        this.client = null;
    }
    async init() {
        const client = await (0, redis_1.createClient)({ url: 'redis://127.0.0.1:6379' })
            .on('error', err => console.log('Redis Client Error', err))
            .connect();
        this.client = client;
    }
    async get(key) {
        try {
            const value = await this.client.get(key);
            return value;
        }
        catch (error) {
            return false;
        }
    }
    async setOne(key, value) {
        try {
            await this.client.set(key, value);
            return true;
        }
        catch (error) {
            return false;
        }
    }
    async close() {
        await this.client.disconnect();
    }
}
const redis = new Redis();
redis.init();
exports.default = redis;
//# sourceMappingURL=index.js.map