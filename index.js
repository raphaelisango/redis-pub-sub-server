import { createClient } from "redis";

const redis = createClient();
redis.on("error", (err) => console.log("Redis Client Error", err));
await redis.connect();

const aString = await redis.ping(); // 'PONG'
const aNumber = await redis.hSet("foo", "alfa", "42", "bravo", "23"); // 2
const aHash = await redis.hGetAll("foo"); // { alfa: '42', bravo: '23' }

const listener = (message, channel) => console.log(message, channel);
await client.subscribe("channel", listener);
await client.pSubscribe("channe*", listener);
// Use sSubscribe for sharded Pub/Sub:
await client.sSubscribe("channel", listener);

await client.publish("channel", "message");
// Use sPublish for sharded Pub/Sub:
await client.sPublish("channel", "message");
