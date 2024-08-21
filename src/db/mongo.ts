import { MongoClient } from "mongodb";

const MONGODB_URL = "mongodb://localhost:2717/favSongswhosfritz";
const client = new MongoClient(MONGODB_URL);

export async function connect(): Promise<void> {
  await client.connect();
}

export async function disconnect(): Promise<void> {
  await client.close();
}

export function getDB() {
  return client.db();
}
