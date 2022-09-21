import redis, { RedisClient } from "redis";
import { User } from "./types";

const PORT = 6379;

class Repository {
  private client: RedisClient;

  constructor(port = PORT) {
    this.client = redis.createClient(6379);
    this.client.on("error", console.warn);
  }

  get(key: string): Promise<User> {
    return new Promise((resolve, reject) => {
      this.client.get(key, (error, response) => {
        return error ? reject(error) : resolve(JSON.parse(response));
      });
    });
  }

  getUserIds(pattern: string): Promise<string[]> {
    return new Promise((resolve, reject) => {
      this.client.keys(pattern, (error, response) => {
        return error ? reject(error) : resolve(response);
      });
    });
  }

  set(key: string, value: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.client.set(key, value, (error, response) => {
        return error ? reject(error) : resolve(response);
      });
    });
  }

  del(key: string): Promise<number> {
    return new Promise((resolve, reject) => {
      this.client.del(key, (error, response) => {
        return error ? reject(error) : resolve(response);
      });
    });
  }
}

/**
 * Singleton
 */
const repository = new Repository();

export default repository;
