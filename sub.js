import { createClient } from "redis";
import Redis_PubSub from "./redis_pub_sub_class.js";

const publisher = new Redis_PubSub("publisher", createClient);
const subscriber = new Redis_PubSub("subscriber", createClient);

const channel = "my-channel";

subscriber.subscribe(channel);
subscriber.onMessage((channel, message) => {
  console.log(`Received message from ${channel}: ${message}`);
});

setInterval(() => {
  publisher.publish(channel, "Hello, subscribers!");
}, 3000);
