import { serveFeed } from "./_server";

export const get = serveFeed("json1", "application/json");
