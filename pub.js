import { createClient } from "redis";
import Redis_PubSub from "./redis_pub_sub_class.js";

const publisher = Redis_PubSub("publisher", createClient);

const channel = "my-channel";

setInterval(() => {
  publisher.publish(channel, "Hello, subscribers!");
}, 3000);
