import { serveFeed } from "./_server";

export const get = serveFeed("rss2", "application/rss+xml");
