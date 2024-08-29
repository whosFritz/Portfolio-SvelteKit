import { MongoClient } from "mongodb";
import { env } from '$env/dynamic/private';


const MONGODB_URL = env.MONGODB_URL;
console.log("MongoDB URL", MONGODB_URL);
const client = new MongoClient(MONGODB_URL);

export async function connectDB(): Promise<void> {
  await client.connect();
}

export async function disconnect(): Promise<void> {
  await client.close();
}

export function getDB() {
  return client.db();
}
