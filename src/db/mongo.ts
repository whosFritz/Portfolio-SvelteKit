import { MongoClient } from "mongodb";

const MONGODB_URL = "mongodb://mongo_container:27017/favSongswhosfritz";
console.log("Connecting to mongo at " + MONGODB_URL);
const client = new MongoClient(MONGODB_URL);
export function start_mongo() {
  console.log("Starting mongo...");
  client.connect();
}

export default client.db();
