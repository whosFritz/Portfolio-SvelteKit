import db from "../db/mongo";

const COLLECTION_NAME = "favSongswhosfritz";
export const favSongscollection = db.collection(COLLECTION_NAME);
