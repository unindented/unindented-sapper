import { serveItem } from "../_server";

export const get = async (req, res) => {
  const slug = `blog/${req.params.slug}`;

  return serveItem(slug)(req, res);
};
