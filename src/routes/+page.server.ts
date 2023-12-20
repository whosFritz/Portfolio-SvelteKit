import { favSongscollection } from "../db/favSongs";
import type { Actions } from "./$types";
export async function load({ cookies }) {
  const cookie = cookies.get("consentCookie");
  const data = await favSongscollection
    .find({})
    .sort({ $natural: -1 })
    .limit(1)
    .toArray();
  const song = JSON.parse(JSON.stringify(data[0]));

  return {
    bestSong: song,
    consentCookie: cookie,
  };
}

export const actions: Actions = {
  default: async ({ cookies }) => {
    cookies.set("consentCookie", true, {
      maxAge: 60 * 60 * 24 * 365,
      path: "/",
    });
  },
};
