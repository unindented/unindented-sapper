import contents from "@unindented/contents";
import markdown2html from "@unindented/markdown-to-html";
import { generateFeed } from "../utils/feed";

export const serveItem = slug => async (_req, res) => {
  const lookup = await contents();

  if (!lookup.hasOwnProperty(slug)) {
    res.writeHead(404, {
      "Content-Type": "application/json"
    });

    return res.end(
      JSON.stringify({
        message: `Could not find "${slug}"`
      })
    );
  }

  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  const item = lookup[slug];
  const body = item.body ? await markdown2html(slug, item.body) : undefined;

  return res.end(
    JSON.stringify({
      ...item,
      body
    })
  );
};

export const serveFeed = (type, mime) => async (_req, res) => {
  const lookup = await contents();

  res.writeHead(200, {
    "Content-Type": mime
  });

  const items = lookup.home.related;
  const result = generateFeed(type, items);

  return res.end(result);
};
