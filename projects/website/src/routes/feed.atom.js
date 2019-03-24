import { serveFeed } from "./_server";

export const get = serveFeed("atom1", "application/atom+xml");
