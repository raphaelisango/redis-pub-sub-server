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

  async subscribe(channel, listener) {
    return await this.client.subscribe(channel, listener);
  }

  async pSubscribe(pattern, listener) {
    return await this.client.pSubscribe(pattern, listener);
  }

  async sSubscribe(channel, listener) {
    return await this.client.sSubscribe(channel, listener);
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

    // const aNumber = await client.hSet("foo", "alfa", "42", "bravo", "23");
    // console.log(aNumber); // 2

    //const aHash = await client.hGetAll("foo");
    //console.log(aHash); // { alfa: '42', bravo: '23' }

    const listener = (message, channel) => console.log(message, channel);
    await client.subscribe("channel", listener);
    await client.pSubscribe("channe*", listener);
    // Use sSubscribe for sharded Pub/Sub:
    //await client.sSubscribe("channel", listener);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    client.quit();
  }
})();
