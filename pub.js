import { createClient } from "redis";

// Create a Redis client
const publisher = createClient();

// Publish a message to a channel
const channel = "my-channel";
const message = "Hello, subscribers!";
publisher(channel, message);

// Close the Redis client when done
//publisher.quit();
