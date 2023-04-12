const redis = require("redis");

// create a Redis client
const client = redis.createClient();

// create a Redis client
//const client = redis.createClient({
//  host: '127.0.0.1', // Redis server host
//  port: 6379 // Redis server port
//});

// subscribe to a channel
client.subscribe("my-channel");

// listen for messages on the channel
client.on("message", function (channel, message) {
  console.log("Received message:", message);
});

// publish a message to the channel
client.publish("my-channel", "Hello, world!");
