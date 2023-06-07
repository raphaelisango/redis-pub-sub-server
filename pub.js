import { createClient } from "redis";

// Create a Redis client
const publisher = createClient();

// Publish a message to a channel
const channel = "my-channel";
const message = "Hello, subscribers!";
publisher.publish(channel, message, (error, count) => {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log(`Message published to ${count} subscribers`);
  }
});

// Close the Redis client when done
//publisher.quit();
