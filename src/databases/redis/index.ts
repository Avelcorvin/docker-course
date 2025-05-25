import { createClient, RedisClientType } from 'redis';



class Redis {
    client: any
    constructor() { 
        this.client=null;
    }

    async init() {
         const client = await createClient({ url: 'redis://127.0.0.1:6379' })
            .on('error', err => console.log('Redis Client Error', err))
            .connect();
            this.client=client;
    }

    async get(key: string) {
        try {
            const value = await this.client.get(key);
            return value;
        } catch (error) {
            return false
        }
    }
    async setOne(key: string, value: string) {
        try {
            await this.client.set(key, value);
            return true;
        } catch (error) {
            return false;
        }
    }
    async close() {
        await this.client.disconnect();
    }
}
const redis = new Redis();
redis.init()
export default redis;