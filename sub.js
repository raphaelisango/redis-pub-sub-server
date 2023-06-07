import { createClient } from "redis";
import Redis_PubSub from "./redis_pub_sub_class.js";

const subscriber = Redis_PubSub("subscriber", createClient);

const channel = "my-channel";

subscriber.subscribe(channel);
subscriber.onMessage((channel, message) => {
  console.log(`Received message from ${channel}: ${message}`);
});
