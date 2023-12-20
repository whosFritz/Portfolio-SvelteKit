import db from "../db/mongo";
import { COLLECTION_NAME } from "$env/static/private";

export const favSongscollection = db.collection(COLLECTION_NAME);
