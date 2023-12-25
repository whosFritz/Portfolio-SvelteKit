import { MongoClient } from "mongodb";
import { MONGODB_URL } from "$env/static/private";

console.log("Connecting to mongo at " + MONGODB_URL);
const client = new MongoClient(MONGODB_URL);
export function start_mongo() {
  console.log("Starting mongo...");
  client.connect();
}

export default client.db();
