import { createClient } from "redis";

class RedisClient {
  constructor() {
    this.client = createClient();
    this.client.on("error", (err) => console.log("redis Client Error", err));
  }

  async connect() {
    await this.client.connect();
  }

  async ping() {
    return await this.client.ping();
  }

  async hSet(...args) {
    return await this.client.hSet(...args);
  }

  async hGetAll(key) {
    return await this.client.hGetAll(key);
  }

  async publish(channel, message) {
    return await this.client.publish(channel, message);
  }

  quit() {
    this.client.quit();
  }
}

// Example usage:
(async () => {
  const client = new RedisClient();
  await client.connect();

  try {
    const aString = await client.ping();
    console.log(aString); // 'PONG'

    //const aNumber = await client.hSet("foo", "alfa", "42", "bravo", "23");
    //console.log(aNumber); // 2

    //const aHash = await client.hGetAll("foo");
    //  console.log(aHash); // { alfa: '42', bravo: '23' }

    await setInterval(() => {
      client.publish("channel", "message");
    }, 3000);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    // client.quit();
  }
})();
