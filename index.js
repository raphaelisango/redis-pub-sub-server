import RedisPUB from "./redis_pub_class.js";
import RedisSUB from "./redis_sub_class.js";

function REDIS_PUBSUB(type, createclient) {
  switch (type) {
    case "pub":
      return new RedisPUB(createclient);

    case "sub":
      return new RedisSUB(createclient);

    default:
      console.error("invalid argument");
      break;
  }
}

export default REDIS_PUBSUB;
/** 
 import { createClient } from "redis";
 import REDIS_PUBSUB  from ".";

(async () => {
  const pub = REDIS_PUBSUB("pub",createClient);
  await pub.connect();
  await pub.publish(channel, message);

  const sub = REDIS_PUBSUB("sub",createClient);
  await sub.connect();
   const listener = (message, channel) => console.log(message, channel);
    await sub.subscribe("channel", listener);
    await sub.pSubscribe("channe*", listener);


})();
*/
