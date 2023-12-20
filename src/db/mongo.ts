import { MongoClient } from "mongodb";
import { MONGODB_URL } from "$env/static/private";

const url = MONGODB_URL;
console.log("Connecting to mongo at " + url);
const client = new MongoClient(url);
export function start_mongo() {
  console.log("Starting mongo...");
  client.connect();
}

export default client.db();
