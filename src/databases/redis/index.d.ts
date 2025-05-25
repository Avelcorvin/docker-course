import { RedisClientType } from 'redis';
declare class Redis {
    client: RedisClientType;
    constructor();
    init(): Promise<void>;
    get(key: string): Promise<string | false>;
    setOne(key: string, value: string): Promise<boolean>;
    close(): Promise<void>;
}
declare const redis: Redis;
export default redis;
