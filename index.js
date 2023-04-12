import { createClient } from "redis";

const client = createClient();
client.on("error", (err) => console.log("redis Client Error", err));
await client.connect();

const aString = await client.ping(); // 'PONG'
const aNumber = await client.hSet("foo", "alfa", "42", "bravo", "23"); // 2
const aHash = await client.hGetAll("foo"); // { alfa: '42', bravo: '23' }

const listener = (message, channel) => console.log(message, channel);
await client.subscribe("channel", listener);
await client.pSubscribe("channe*", listener);
// Use sSubscribe for sharded Pub/Sub:
await client.sSubscribe("channel", listener);

await client.publish("channel", "message");
// Use sPublish for sharded Pub/Sub:
await client.sPublish("channel", "message");
