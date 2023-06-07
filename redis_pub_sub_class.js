class RedisPublisher {
  constructor(createClient) {
    this.publisher = createClient();
  }

  async publish(channel, message) {
    await this.publisher.connect();
    this.publisher.publish(channel, message, (error, count) => {
      if (error) {
        console.error("Error:", error);
      } else {
        console.log(`Message published to ${count} subscribers`);
      }
    });
  }

  quit() {
    this.publisher.quit();
  }
}

class RedisSubscriber {
  constructor(createClient) {
    this.subscriber = createClient();
  }

  subscribe(channel) {
    this.subscriber.subscribe(channel);
  }
  psubscriber(channel) {
    this.subscriber.pSubscribe(channel);
  }

  onMessage(callback) {
    this.subscriber.on("message", callback);
  }

  quit() {
    this.subscriber.quit();
  }
}

export default function Redis_PubSub(method, createClient) {
  if (method == "subscriber") {
    return new RedisSubscriber(createClient);
  } else if (method == "publisher") {
    return new RedisPublisher(createClient);
  } else {
    console.error("Invalid method >> " + method);
  }
}

/*
// Example usage:

import { createClient } from "redis";
import Redis_PubSub  from "redis";

const publisher = new Redis_PubSub("publisher",createClient);
const subscriber = new Redis_PubSub("subscriber",createClient);

const channel = "my-channel";

subscriber.subscribe(channel);
subscriber.onMessage((channel, message) => {
  console.log(`Received message from ${channel}: ${message}`);
});

publisher.publish(channel, "Hello, subscribers!");

publisher.quit();
subscriber.quit();

*/
