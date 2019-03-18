import { serveItem } from "../_server";

export const get = async (req, res) => {
  const slug = `about/${req.params.slug}`;

  return serveItem(slug)(req, res);
};
