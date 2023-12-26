import type { Document } from "mongodb";

export interface Song extends Document{
  _id: string;
  spotify_id: string;
  time_range: string;
  track_name: string;
  last_checked: string;
  last_updated: string;
}

export interface Project {
  heading: string;
  descriptions: string[];
  projectLink: string;
  imageURL: string;
  displayColor: string;
}
