import { favSongscollection } from "../db/favSongs";
import type { Actions } from "./$types";
export async function load({ cookies }) {
  const cookie = cookies.get("consentCookie");
  const data = await favSongscollection
    .find({})
    .sort({ $natural: -1 })
    .toArray();

  let shortTerm = data.find((item) => item.time_range === "short_term");
  let mediumTerm = data.find((item) => item.time_range === "medium_term");
  let longTerm = data.find((item) => item.time_range === "long_term");

  shortTerm = JSON.parse(JSON.stringify(shortTerm));
  mediumTerm = JSON.parse(JSON.stringify(mediumTerm));
  longTerm = JSON.parse(JSON.stringify(longTerm));
  // put them into a list

  const songs: [...any] = [shortTerm, mediumTerm, longTerm];

  return {
    favSongs: songs,
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
