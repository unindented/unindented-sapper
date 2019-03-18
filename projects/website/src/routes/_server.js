import contents from "@unindented/contents";
import markdown2html from "@unindented/markdown-to-html";

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
