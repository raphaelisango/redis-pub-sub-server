import { createClient } from "redis";

// Create a Redis client
const subscriber = createClient();

// Subscribe to a channel
const channel = "my-channel";
subscriber.subscribe(channel);

// Handle incoming messages
subscriber.on("message", (channel, message) => {
  console.log(`Received message from ${channel}: ${message}`);
});

// Close the Redis client when done
// Note: Subscribers typically remain active and listen for messages indefinitely
// You can close the subscriber when it's no longer needed
subscriber.quit();
