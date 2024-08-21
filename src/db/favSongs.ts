import { getDB } from '../db/mongo';
const db = getDB();

const COLLECTION_NAME = "favSongswhosfritz";
export const favSongscollection = db.collection(COLLECTION_NAME);
