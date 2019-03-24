import { Feed } from "feed";
import {
  authorEmail,
  authorName,
  siteDescription,
  siteTitle,
  siteUrl
} from "./metadata";

export const generateFeed = (type, items) => {
  const feed = new Feed({
    id: `${siteUrl}/`,
    link: `${siteUrl}/`,
    title: siteTitle,
    description: siteDescription,
    copyright: `All content by ${authorName} unless otherwise noted. Some rights reserved.`,
    language: "en-US",
    updated: new Date(),
    image: `${siteUrl}/favicon.png`,
    favicon: `${siteUrl}/favicon.ico`,
    feedLinks: {
      atom: `${siteUrl}/feed.atom`,
      json: `${siteUrl}/feed.json`,
      rss: `${siteUrl}/feed.rss`
    },
    author: {
      name: authorName,
      email: authorEmail,
      link: `${siteUrl}/`
    }
  });

  items.forEach(item => {
    feed.addItem({
      id: `${siteUrl}/${item.slug}/`,
      link: `${siteUrl}/${item.slug}/`,
      title: item.title,
      description: item.description,
      date: new Date(item.date),
      image: null,
      content: "",
      author: [
        {
          name: authorName,
          email: authorEmail,
          link: `${siteUrl}/`
        }
      ]
    });
  });

  return feed[type]();
};
