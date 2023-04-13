import { createClient } from "redis";

const client = createClient();
client.on("error", (err) => console.log("redis Client Error", err));
await client.connect();

const aString = await client.ping(); // 'PONG'
const aNumber = await client.hSet("foo", "alfa", "42", "bravo", "23"); // 2
const aHash = await client.hGetAll("foo"); // { alfa: '42', bravo: '23' }

console.log(aString);
console.log(aHash);
